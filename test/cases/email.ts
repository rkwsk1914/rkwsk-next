import { ERROR_MESSAGE } from '@/const/ErrorMessage'
import { EMAIL_SCHEMA } from '@/const/Schema'

import { JestZodMethods } from './../zod/modules'

export const emailTest = () => {
  const testName = 'Email Test'

  describe(testName, () => {
    const schema = EMAIL_SCHEMA
    const Test = new JestZodMethods(testName, schema)
    Test.testExpectSuccess('sample@gmail.com')
    Test.testExpectMiss('sample', ERROR_MESSAGE[0])
    Test.testRequire()
    Test.testOverMaxLength(
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@gmail.com',
      ERROR_MESSAGE[2]
    )
    Test.testNotOverMaxLength('aaaaaaaaaaaa@gmail.com')
  })
}