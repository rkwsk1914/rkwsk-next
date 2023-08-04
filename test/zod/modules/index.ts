import { ERROR_MESSAGE } from '@/const/ErrorMessage'

export class JestZodMethods {
  testName: string
  schema: any
  testOK: (validFormData: any) => void
  testNG: (validFormData: any, errorMsg: string) => void

  constructor(testName: string, schema: any) {
    this.testName = testName
    this.schema = schema

    this.testOK = (validFormData: any) => {
      const validationResult = this.schema.safeParse(validFormData)
      expect(validationResult.success).toBeDefined()
      expect(validationResult.success).toBe(true)
      expect(validationResult.data).toEqual(validFormData)
    }

    this.testNG = (validFormData: any, errorMsg: string) => {
      const validationResult = this.schema.safeParse(validFormData)
      expect(validationResult.success).toBeDefined()
      expect(validationResult.success).toBe(false)
      expect(validationResult.data).toBeUndefined()
      expect(validationResult.error.issues[0].message).toBe(errorMsg)
    }
  }

  testExpectSuccess (validFormData: any) {
    test('Success Test', () => this.testOK(validFormData))
  }

  testExpectMiss (validFormData: any, errorMsg: string) {
    test('Miss Test', () => this.testNG(validFormData, errorMsg))
  }

  testRequire () {
    test('Require Test', () => {
      this.testNG("", ERROR_MESSAGE[1])
    })
  }

  testOverMaxLength (validFormData: string, errorMsg: string) {
    const testName = `Over Max Length Test [ Length: ${validFormData.length} ]`
    test(testName, () => {
      this.testNG(validFormData, errorMsg)
    })
  }

  testNotOverMaxLength (validFormData: string) {
    const testName = `Not Over Max Length Test [ Length: ${validFormData.length} ]`
    test(testName, () => {
      this.testOK(validFormData)
    })
  }

  testClearRegExp (validFormData: string) {
    const testName = `Clear RegExp Test [ ${validFormData} ]`
    test(testName, () => {
      this.testOK(validFormData)
    })
  }

  testMissRegExp (validFormData: string, errorMsg: string) {
    const testName = `Miss RegExp Test [ ${validFormData} ]`
    test(testName, () => {
      this.testNG(validFormData, errorMsg)
    })
  }
}
