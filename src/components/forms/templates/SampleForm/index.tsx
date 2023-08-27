import { useEffect } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from "react-hook-form"

import { SCHEMA } from '@/const/Schema'
import { TEXT_INPUT_DATA } from '@/const/TextInputData'

import { ButtonElement } from '@/components/forms/atoms/ButtonElement'
import { TextInputElement } from '@/components/forms/atoms/TextInputElement'

type Inputs = {
  email: string,
  firstName: string
};

export const SampleForm: React.FC = (): JSX.Element => {
  const formNameList: Array<keyof Inputs> = ["email", "firstName"]
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

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInputElement
        disabled={false}
        helperText={errors[formNameList[0]]?.message}
        error={errors[formNameList[0]] ? true : false}
        { ...TEXT_INPUT_DATA[formNameList[0]] }
        {...register(formNameList[0])}
        onBlur={() => {
          trigger(formNameList[0])
        }}
      />

      <TextInputElement
        disabled={false}
        helperText={errors[formNameList[1]]?.message}
        error={errors[formNameList[1]] ? true : false}
        { ...TEXT_INPUT_DATA[formNameList[1]] }
        {...register(formNameList[1])}
        onBlur={() => {
          trigger(formNameList[1])
        }}
      />

      <ButtonElement onClick={handleSubmit(onSubmit)}>送信</ButtonElement>
    </form>
  )
}
