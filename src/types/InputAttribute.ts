import { ChangeHandler } from "react-hook-form"

interface RegisterTypes {
  name: string
  onChange?: ChangeHandler | ((e: React.ChangeEvent<HTMLInputElement>) => void)
  onBlur?: ChangeHandler | ((e: React.FocusEvent<HTMLInputElement>) => void)
}

interface AttributeTypes extends RegisterTypes {
  id?: string
  label: string
  error: boolean
  helperText: string
  disabled?: boolean
}

export type InputAttributeTypes = AttributeTypes

export const InputAttributeOptions = {
  disabled: {
    control: 'boolean',
  },
  error: {
    control: 'boolean',
  },
  required: {
    control: 'boolean',
  },
}