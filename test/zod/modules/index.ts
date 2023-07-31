import { ERROR_MESSAGE } from '@/const/ErrorMessage'

const testExpectSuccess = (validFormData: any, schema: any) => {
  const validationResult = schema.safeParse(validFormData)
  expect(validationResult.success).toBeDefined()
  expect(validationResult.success).toBe(true)
  expect(validationResult.data).toEqual(validFormData)
}

const testExpectInValid = (validFormData: any, schema: any, errorMsg: string) => {
  const validationResult = schema.safeParse(validFormData)
  expect(validationResult.success).toBeDefined()
  expect(validationResult.success).toBe(false)
  expect(validationResult.data).toBeUndefined()
  expect(validationResult.error.issues[0].message).toBe(errorMsg)
}

const testRequire = (schema: any) => {
  test('Require Test', () => {
    testExpectInValid("", schema, ERROR_MESSAGE[1])
  })
}

const testOverMaxLength = (parentTestName: string, validFormData: string, schema: any, errorMsg: string) => {
  const testName = 'Over Max Length Test'
  test(testName, () => {
    console.log(`[ ${parentTestName} / ${testName} ] Length: `, validFormData.length)
    testExpectInValid(validFormData, schema, errorMsg)
  })
}

const testNotExceedingMaxLength = (parentTestName: string, validFormData: string, schema: any) => {
  const testName = 'Not Exceeding Max LengthTest'
  test(testName, () => {
    console.log(`[ ${parentTestName} / ${testName} ] Length: `, validFormData.length)
    testExpectSuccess(validFormData, schema)
  })
}

export {
  testExpectSuccess,
  testExpectInValid,
  testRequire,
  testOverMaxLength,
  testNotExceedingMaxLength,
}