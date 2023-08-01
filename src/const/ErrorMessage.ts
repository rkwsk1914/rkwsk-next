const maxLengthErrorMessage = (value: string | number ) => `最大${value}文字までしか入力できません。`

const lengthErrorMessage = (value: string | number ) => `${value}文字入力してください。`

export const MAX_LENGTH_LIST = {
  email: 100,
  name: 50,
  tel: 11,
  contact: 500
}

export const ERROR_MESSAGE: { [key: number]: string } = {
  0: 'メールアドレスの形式で入力してください。例）sample@sample.com',
  1: '入力必須項目です。',
  2: maxLengthErrorMessage(MAX_LENGTH_LIST.email),
  3: maxLengthErrorMessage(MAX_LENGTH_LIST.name),
  4: maxLengthErrorMessage(MAX_LENGTH_LIST.tel),
  5: maxLengthErrorMessage(MAX_LENGTH_LIST.contact),
  6: '全角ひらがなで入力してください。',
  7: '全角カタカナで入力してください。',
  8: '半角カタカナで入力してください。',
  9: `半角数字${lengthErrorMessage(MAX_LENGTH_LIST.tel)}`,
  10: `全角数字は無効です。`,
}
