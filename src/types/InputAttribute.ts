import { ChangeHandler } from "react-hook-form"

import { AutoCompleteType } from '@/types/AutoCompleteType'

interface RegisterTypes {
  name: string
  onChange?: ChangeHandler | ((e: React.ChangeEvent<HTMLInputElement>) => void)
  onBlur?: ChangeHandler | ((e: React.FocusEvent<HTMLInputElement>) => void)
}

interface AttributeTypes extends RegisterTypes {
  id?: string
  label: string
  error?: boolean
  helperText?: string
  disabled?: boolean
}

export type InputAttributeTypes = AttributeTypes

export interface TextInputBaseProps extends InputAttributeTypes {
  type: 'text' | 'tel' | 'email' | 'number' | 'password' | 'search' | 'url'
  autoComplete?: AutoCompleteType
  autoFocus?: boolean
  variant?: 'filled' | 'outlined' | 'standard'
  placeholder?: string
  rows?: number
  size?: 'small' | 'medium'
}

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