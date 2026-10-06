
import { useEffect, useRef, useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'

import { useLanguage } from '@/i18n/LanguageProvider'

import { useAPI } from '@/hooks/useAPI'
import { useChrFormatChange } from '@/hooks/useChrFormatChange'

import { getContactSchema } from '@/const/Schema'
import { TEXT_INPUT_DATA } from '@/const/TextInputData'

import { Button } from '@/components/atoms/Button'
import { TextInputElement } from '@/components/forms/atoms/TextInputElement'
import { PageTopShowAlert } from '@/components/molecules/PageTopShowAlert'

import styles from './style.module.scss'

import { PostContactDataType } from '@/types/APIDataType'


type Inputs = {
  firstName: string,
  lastName: string,
  firstKanaName: string,
  lastKanaName: string,
  tel: string,
  email: string,
  contact: string,
};

type Props = {
  onSubmit?: (event?: React.FormEvent<HTMLFormElement>) => void,
  isTestMode?: boolean
}

type AlertProps = Pick<React.ComponentProps<typeof PageTopShowAlert>, 'type' | 'children'>

export const ContactForm: React.FC<Props> = ({
  onSubmit,
  isTestMode = false
}): JSX.Element => {
  const { language, t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [alertProps, setAlertsProps] = useState<AlertProps>({
    type: 'info',
    children: <></>
  })
  const formInputTextNameList: Array<keyof Inputs> = [
    'firstName',
    'lastName',
    'firstKanaName',
    'lastKanaName',
    'tel',
    'email',
    'contact',
  ]
  const { register, trigger, handleSubmit, setValue, reset, formState: { errors, isDirty, isValid } } = useForm<Inputs>({
    resolver: zodResolver(getContactSchema(language)),
    defaultValues: isTestMode ? {
      firstName: "山田",
      lastName: "太郎",
      firstKanaName: "やまだ",
      lastKanaName: "たろう",
      tel: "09058233302",
      email: "sample@sample.com",
      contact: "テスト、テスト、テスト、テスト、テスト、テスト、テスト。",
    } : { firstName: '', lastName: '', firstKanaName: '', lastKanaName: '', tel: '', email: '', contact: '' }
  })

  const previousLanguage = useRef(language)
  useEffect(() => {
    if (previousLanguage.current !== language && isDirty) void trigger()
    previousLanguage.current = language
  }, [language, isDirty, trigger])

  const {doPostContact, doAPIDisplaySimulation} = useAPI()

  const {
    fixHiraGanaText,
    fixHalfWidth,
    removeFullWidth,
    removeFullWidthNumber,
    removeFullWidthSymbol,
    removeOtherHalfNumber,
  } = useChrFormatChange()

  const onSubmitCallBack: SubmitHandler<Inputs> = async (data: PostContactDataType) => {
    if (isTestMode) {
      const res = doAPIDisplaySimulation(false)
      setAlertsProps({
        type: res.isError ? 'error' : 'success',
        children: res.message
      })
      setShowAlert(true)
      reset()
      return
    }

    setIsSubmitting(true)
    try {
      const res = await doPostContact(data, language)
      setAlertsProps({ type: res.isError ? 'error' : 'success', children: res.message })
      setShowAlert(true)
      if (!res.isError) {
        onSubmit && onSubmit()
        reset()
      }
    } catch {
      setAlertsProps({ type: 'error', children: 'お問い合わせ内容の送信に失敗しました。' })
      setShowAlert(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const setTextInputElementProps = (index: number): React.ComponentProps<typeof TextInputElement> => {
    const onlyTrigger = () => {
      trigger(formInputTextNameList[index])
    }

    const FixName = (event: React.FocusEvent<HTMLInputElement>) => {
      const fixValue = language === 'en' ? event.target.value.trim() : removeFullWidthSymbol(removeFullWidthNumber(event.target.value))
      setValue(formInputTextNameList[index], fixValue)
      trigger(formInputTextNameList[index])
    }

    const FixKanaName = (event: React.FocusEvent<HTMLInputElement>) => {
      const fullValue = removeFullWidthSymbol(removeFullWidthNumber(event.target.value))
      const fixValue = fixHiraGanaText(fullValue)
      setValue(formInputTextNameList[index], fixValue)
      trigger(formInputTextNameList[index])
    }

    const FixEmail = (event: React.FocusEvent<HTMLInputElement>) => {
      const fixValue = removeFullWidth(fixHalfWidth(event.target.value))
      setValue(formInputTextNameList[index], fixValue)
      trigger(formInputTextNameList[index])
    }

    const FixTelInput = (event: React.FocusEvent<HTMLInputElement>) => {
      const fixValue = language === 'en' ? fixHalfWidth(event.target.value).replace(/[\s()-]/g, '') : removeOtherHalfNumber(fixHalfWidth(event.target.value))
      setValue(formInputTextNameList[index], fixValue)
      trigger(formInputTextNameList[index])
    }

    const setOnBlur = (index: number) => {
      switch (formInputTextNameList[index]) {
        case 'firstName':
        case 'lastName':
          return FixName
        case 'firstKanaName':
        case 'lastKanaName':
          return FixKanaName
        case 'email':
          return FixEmail
        case 'tel':
          return FixTelInput
        default:
          return onlyTrigger
      }
    }

    return {
      variant: 'outlined',
      helperText: t(errors[formInputTextNameList[index]]?.message || ''),
      error: errors[formInputTextNameList[index]] ? true : false,
      ...TEXT_INPUT_DATA[formInputTextNameList[index]],
      label: t(String(TEXT_INPUT_DATA[formInputTextNameList[index]].label || '')),
      placeholder: formInputTextNameList[index] === 'tel' && language === 'en' ? '+14155552671' : t(TEXT_INPUT_DATA[formInputTextNameList[index]].placeholder || ''),
      ...register(formInputTextNameList[index]),
      onBlur: setOnBlur(index)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmitCallBack)}>
      <PageTopShowAlert
        isOpen={showAlert}
        onClose={() => {setShowAlert(false)}}
        variant='standard'
        {...alertProps}>
        {typeof alertProps.children === 'string' ? t(alertProps.children) : alertProps.children}
      </PageTopShowAlert>
      <div className={styles.formArea}>
        <div className={styles.nameArea}>
          <TextInputElement {...setTextInputElementProps(0)} />
          <TextInputElement {...setTextInputElementProps(1)} />
        </div>
        {language === 'ja' && <div className={styles.nameArea}>
          <TextInputElement {...setTextInputElementProps(2)} />
          <TextInputElement {...setTextInputElementProps(3)} />
        </div>}
        <TextInputElement {...setTextInputElementProps(4)} />
        <TextInputElement {...setTextInputElementProps(5)} />
        <TextInputElement {...setTextInputElementProps(6)} multiline rows={4}/>

        <div className={styles.submitArea}>

          <Button
            disabled={isSubmitting || (!isTestMode && !(isDirty && isValid))}
            type='prime'
            submit
          >{t(isSubmitting ? '送信中…' : '送信')}</Button>
        </div>
      </div>
    </form>
  )
}
