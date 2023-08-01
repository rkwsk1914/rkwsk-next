import { useEffect } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from "react-hook-form"

import { SCHEMA } from '@/const/Schema'
import { TEXT_INPUT_DATA } from '@/const/TextInputData'

import { ButtonElement } from '@/components/forms/atoms/ButtonElement'
import { TextInputElement } from '@/components/forms/atoms/TextInputElement'

type Inputs = {
  firstName: string,
  lastName: string,
  firstKanaName: string,
  lastKanaName: string,
  tel: string,
  email: string,
};


export const ContactForm: React.FC = (): JSX.Element => {
  const formInputTextNameList: Array<keyof Inputs> = [
    "firstName",
    "lastName",
    "firstKanaName",
    "lastKanaName",
    "tel",
    "email",
  ]
  const { register, trigger, handleSubmit, watch, formState: { isValid,errors } } = useForm<Inputs>({
    resolver: zodResolver(SCHEMA),
  })
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data)

  useEffect(() => {
    const subscription = watch((value, { name, type }) =>
      console.log(value, name, type)
    )

    return () => subscription.unsubscribe()
  }, [watch, register])

  const TextInput: React.FC<{index :number}> = ({index}): JSX.Element => {
    return (
      <TextInputElement
        disabled={false}
        helperText={errors[formInputTextNameList[index]]?.message}
        error={errors[formInputTextNameList[index]] ? true : false}
        { ...TEXT_INPUT_DATA[formInputTextNameList[index]] }
        {...register(formInputTextNameList[index])}
        onBlur={() => {
          trigger(formInputTextNameList[index])
        }}
      />
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput index={0} />
      <TextInput index={1} />
      <TextInput index={2} />
      <TextInput index={3} />
      <TextInput index={4} />
      <TextInput index={5} />

      <ButtonElement onClick={handleSubmit(onSubmit)}>送信</ButtonElement>
    </form>
  )
}
