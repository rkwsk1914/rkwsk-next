import * as React from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from "react-hook-form"
import * as z from 'zod'

import { ButtonElement } from '@/components/forms/atoms/ButtonElement'
import { TextInputElement } from '@/components/forms/atoms/TextInputElement'


const schema = z.object({
  email: z.string().min(1, { message: 'Required' }),
})

type Inputs = {
  email: string,
};

export const LoginForm: React.FC = (): JSX.Element => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({
    resolver: zodResolver(schema),
  })
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data)

  console.log(watch("email")) // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInputElement
        id="email"
        label='email'
        disabled={false}
        helperText={""}
        value={""}
        type='email'
        autoComplete='email'
        error={errors.email ? true :false}
        {...register("email")}
      />

      <ButtonElement>送信</ButtonElement>
    </form>
  )
}
