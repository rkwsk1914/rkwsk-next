import * as React from 'react'

import { useForm, SubmitHandler } from "react-hook-form"

import { TextInputElement } from '@/components/forms/atoms/TextInputElement'


type Inputs = {
  email: string,
};

export const LoginForm: React.FC = (): JSX.Element => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data)

  console.log(watch("email")) // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInputElement
        id="email"
        disabled={false}
        helperText={""}
        value={""}
        type='email'
        autoComplete='email'
        error={errors.email ? true :false}
        {...register("email")}
      />

      <input type="submit" />
    </form>
  )
}
