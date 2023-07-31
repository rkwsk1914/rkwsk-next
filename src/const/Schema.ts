import * as zod from 'zod'

import { ErrorMessage } from '@/const/ErrorMessage'

const requiredMessage = ErrorMessage[1].msg

const NAME_SCHEMA = zod
.string()
.min(1, { message: requiredMessage })
.max(50)

const EMAIL_SCHEMA = zod
.string()
.min(1, { message: requiredMessage })
.email({ message: ErrorMessage[0].msg })
.max(100)

const TEL_SCHEMA = zod
.string()
.min(1, { message: requiredMessage })
.max(11)

const SCHEMA = zod.object({
  email: EMAIL_SCHEMA,
  firstName: NAME_SCHEMA,
  lastName: NAME_SCHEMA,
  firstKanaName: NAME_SCHEMA,
  lastKanaName: NAME_SCHEMA,
  tel: TEL_SCHEMA,
})

export {
  EMAIL_SCHEMA,
  NAME_SCHEMA,
  TEL_SCHEMA,
  SCHEMA
}