import { ERROR_MESSAGE } from '@/const/ErrorMessage'
import { NAME_SCHEMA } from '@/const/Schema'

import { JestZodMethods } from './../zod/modules'

export const nameTest = () => {
  const testName = 'Name Test'
  describe(testName, () => {
    const schema = NAME_SCHEMA
    const Test = new JestZodMethods(testName, schema)
    Test.testExpectSuccess("太郎")
    Test.testRequire()
    Test.testOverMaxLength(
      'あああああああああああああああああああああああああああああああああああああああああああああああああああ',
      ERROR_MESSAGE[3]
    )
    Test.testNotOverMaxLength('ああああああああああああああああああああああああああああああああああああああああああああああああああ')
    Test.testMissRegExp('1234567890', ERROR_MESSAGE.fullCharacter)
    Test.testMissRegExp('１２３４５６７８９０', ERROR_MESSAGE.fullCharacter)
  })
}

