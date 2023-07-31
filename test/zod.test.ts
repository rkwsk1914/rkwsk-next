import { ErrorMessage } from '@/const/ErrorMessage'
import * as S from '@/const/Schema'


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

describe('Zod Test', () => {
  describe('Email Test', () => {
    it('Success Test', () => {
      testExpectSuccess("sample@gmail.com", S.EMAIL_SCHEMA)
    })

    it('Miss Test', () => {
      testExpectInValid("samplesample", S.EMAIL_SCHEMA, ErrorMessage[0].msg)
    })
  })
})

