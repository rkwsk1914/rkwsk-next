import { ERROR_MESSAGE } from '@/const/ErrorMessage'
import { EMAIL_SCHEMA } from '@/const/Schema'

import * as ZodTest from './../zod/modules'

const validFormDataList = [
  // 0
  "sample@gmail.com",
  // 1
  "samplesample",
  // 2
  "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@gmail.com",
  // 3
  "aaaaaaaaaaaa@gmail.com",
]

export const emailTest = () => {
  const testName = 'Email Test'
  describe(testName, () => {
    const schema = EMAIL_SCHEMA
    test('Success Test', () => ZodTest.testExpectSuccess(validFormDataList[0], schema))
    test('Miss Test', () => ZodTest.testExpectInValid(validFormDataList[1], schema, ERROR_MESSAGE[0]))
    ZodTest.testRequire(schema)
    ZodTest.testOverMaxLength(testName, validFormDataList[2], schema, ERROR_MESSAGE[2])
    ZodTest.testNotExceedingMaxLength(testName, validFormDataList[3], schema)
  })
}