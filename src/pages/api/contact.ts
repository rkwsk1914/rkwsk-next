import { Resend } from 'resend'

import { SCHEMA } from '@/const/Schema'

import type { NextApiRequest, NextApiResponse } from 'next'
import type * as zod from 'zod'

type ResponseData = {
  message: string
}

type ContactData = zod.infer<typeof SCHEMA>

const createContactMailText = ({
  firstName,
  lastName,
  firstKanaName,
  lastKanaName,
  tel,
  email,
  contact,
}: ContactData) => {
  return [
    'ポートフォリオサイトからお問い合わせがありました。',
    '',
    `氏名: ${lastName} ${firstName}`,
    `ふりがな: ${lastKanaName} ${firstKanaName}`,
    `電話番号: ${tel}`,
    `メールアドレス: ${email}`,
    '',
    'お問い合わせ内容:',
    contact,
  ].join('\n')
}

const isContactMailEnabled = () => {
  return process.env.CONTACT_MAIL_ENABLED === 'true'
}

const getMissingMailSettings = () => {
  return [
    ['CONTACT_FROM_EMAIL', process.env.CONTACT_FROM_EMAIL],
    ['CONTACT_TO_EMAIL', process.env.CONTACT_TO_EMAIL],
    ['RESEND_API_KEY', process.env.RESEND_API_KEY],
  ]
    .filter(([, value]) => !value)
    .map(([key]) => key)
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const mailSettings = {
    from: process.env.CONTACT_FROM_EMAIL ?? '',
    to: process.env.CONTACT_TO_EMAIL ?? '',
    apiKey: process.env.RESEND_API_KEY ?? '',
  }

  const parseResult = SCHEMA.safeParse(req.body)

  if (!parseResult.success) {
    return res.status(400).json({ message: 'Invalid request body' })
  }

  const contactData = parseResult.data

  if (!isContactMailEnabled()) {
    console.info('Contact mail is disabled. Skipping email delivery.')
    return res.status(200).json({ message: 'OK' })
  }

  const missingMailSettings = getMissingMailSettings()

  if (missingMailSettings.length > 0) {
    console.error(`Missing mail settings: ${missingMailSettings.join(', ')}`)
    return res.status(500).json({ message: 'Mail settings are not configured' })
  }

  const resend = new Resend(mailSettings.apiKey)

  try {
    const { data, error } = await resend.emails.send({
      from: mailSettings.from,
      to: mailSettings.to,
      replyTo: contactData.email,
      subject: `お問い合わせ: ${contactData.lastName} ${contactData.firstName} 様`,
      text: createContactMailText(contactData),
    })

    if (error) {
      console.error(error)
      return res.status(500).json({ message: 'Failed to send mail' })
    }

    console.info(`Contact mail sent: ${data?.id}`)

    return res.status(200).json({ message: 'OK' })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Failed to send mail' })
  }
}
