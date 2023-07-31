import * as zod from 'zod'

const requiredMessage = "入力必須項目です。"

const nameZod = zod
  .string()
  .min(1, { message: requiredMessage })
  .max(50)


export const SCHEMA = zod.object({
  email: zod
    .string()
    .min(1, { message: requiredMessage })
    .email({ message: 'メールアドレスの形式で入力してください。例）sample@sample.com' })
    .max(100)
  ,
  firstName: nameZod
  ,
  lastName: nameZod
  ,
  firstKanaName: nameZod
  ,
  lastKanaName: nameZod
  ,
  tel: zod
    .number()
    .min(1, { message: requiredMessage })
    .max(10)
  ,
  
})