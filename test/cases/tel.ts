import { ERROR_MESSAGE } from '@/const/ErrorMessage'
import { TEL_SCHEMA } from '@/const/Schema'

import { JestZodMethods } from './../zod/modules'

export const telTest = () => {
  const testName = 'Tel Test'

  describe(testName, () => {
    const schema = TEL_SCHEMA
    const Test = new JestZodMethods(testName, schema)
    Test.testExpectSuccess('08012345678')
    Test.testExpectMiss('あいうえお', ERROR_MESSAGE[9])
    Test.testRequire()
    Test.testMissRegExp('123456789012', ERROR_MESSAGE[9])
  })
}