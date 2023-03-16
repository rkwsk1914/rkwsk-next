import * as React from 'react'

import TextField from '@mui/material/TextField'

import { AutoCompleteType } from '@/types/AutoCompleteType'
import { InputAttributeTypes } from '@/types/InputAttribute'

interface BaseProps extends InputAttributeTypes {
  type: 'text' | 'tel' | 'email' | 'number' | 'password' | 'search' | 'url'
  autoComplete: AutoCompleteType
  autoFocus?: boolean
  variant?: 'filled' | 'outlined' | 'standard'
  placeholder?: string
  rows?: number
  size?: 'small' | 'medium'
}

interface ControlledProps extends BaseProps {
  value?: string
  defaultValue?: never
}

interface UncontrolledProps extends BaseProps {
  value?: never
  defaultValue?: string
}

type RefProps = ControlledProps | UncontrolledProps

export const TextInputElement = React.forwardRef(
    function RefComponent (
      {
        id,
        disabled,
        error,
        helperText,
        name,
        onChange,
        onBlur,
        type,
        autoComplete,
        autoFocus = false,
        variant = 'standard',
        placeholder,
        rows,
        size = 'medium',
        value,
        defaultValue
      }: RefProps,
      ref?: React.Ref<HTMLInputElement>
    ): JSX.Element {
  return (
    <TextField
      id={id}
      disabled={disabled}
      error={error}
      helperText={helperText}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      type={type}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      variant={variant}
      placeholder={placeholder}
      rows={rows}
      size={size}
      value={value}
      defaultValue={defaultValue}
      fullWidth
      inputRef={ref}
    />
  )
})
