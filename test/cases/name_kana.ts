import { ERROR_MESSAGE } from '@/const/ErrorMessage'
import { NAME_KANA_SCHEMA } from '@/const/Schema'

import { JestZodMethods } from './../zod/modules'

export const nameKanaTest = () => {
  const testName = 'Name Kana Test'
  describe(testName, () => {
    const schema = NAME_KANA_SCHEMA
    const Test = new JestZodMethods(testName, schema)
    Test.testExpectSuccess("あいうえお")
    Test.testRequire()
    Test.testOverMaxLength(
      'あああああああああああああああああああああああああああああああああああああああああああああああああああ',
      ERROR_MESSAGE[3]
    )
    Test.testNotOverMaxLength('ああああああああああああああああああああああああああああああああああああああああああああああああああ')
    Test.testClearRegExp('ひらなが',)
    Test.testMissRegExp('漢字', ERROR_MESSAGE[6])
    Test.testMissRegExp('カタカナ', ERROR_MESSAGE[6])
    Test.testMissRegExp('ｶﾀｶﾅ', ERROR_MESSAGE[6])
  })
}
