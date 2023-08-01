import * as zod from 'zod'

import { ERROR_MESSAGE } from '@/const/ErrorMessage'

const requiredMessage = ERROR_MESSAGE[1]

const NAME_SCHEMA = zod
  .string()
  .min(1, { message: requiredMessage })
  .max(50, { message: ERROR_MESSAGE[3] })

const EMAIL_SCHEMA = zod
  .string()
  .min(1, { message: requiredMessage })
  .email({ message: ERROR_MESSAGE[0] })
  .max(100, { message: ERROR_MESSAGE[2] })

const TEL_SCHEMA = zod
  .string()
  .min(1, { message: requiredMessage })
  .max(11, { message: ERROR_MESSAGE[4] })

const TEXT_AREA_SCHEMA = zod
  .string()
  .min(1, { message: requiredMessage })
  .max(500, { message: ERROR_MESSAGE[5] })

const SCHEMA = zod.object({
  email: EMAIL_SCHEMA,
  firstName: NAME_SCHEMA,
  lastName: NAME_SCHEMA,
  firstKanaName: NAME_SCHEMA,
  lastKanaName: NAME_SCHEMA,
  tel: TEL_SCHEMA,
  contact: TEXT_AREA_SCHEMA,
})

export {
  EMAIL_SCHEMA,
  NAME_SCHEMA,
  TEL_SCHEMA,
  SCHEMA
}