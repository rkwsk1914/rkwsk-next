import { ERROR_MESSAGE } from '@/const/ErrorMessage'
import { NAME_SCHEMA } from '@/const/Schema'

import * as ZodTest from './../zod/modules'

const validFormDataList = [
  // 0
  "sample@gmail.com",
  // 1
  "samplesample",
  // 2
  "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  // 3
  "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
]

export const nameTest = () => {
  const testName = 'Name Test'
  describe(testName, () => {
    const schema = NAME_SCHEMA
    test('Success Test', () => ZodTest.testExpectSuccess(validFormDataList[0], schema))
    ZodTest.testRequire(schema)
    ZodTest.testOverMaxLength(testName, validFormDataList[2], schema, ERROR_MESSAGE[3])
    ZodTest.testNotExceedingMaxLength(testName, validFormDataList[3], schema)
  })
}