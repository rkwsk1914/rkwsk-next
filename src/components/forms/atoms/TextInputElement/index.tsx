import * as React from 'react'

import TextField from '@mui/material/TextField'

import { AutoCompleteType } from '@/types/AutoCompleteType'
import { InputAttributeTypes } from '@/types/InputAttribute'

interface BaseProps extends InputAttributeTypes {
  type: 'text' | 'tel' | 'email' | 'number' | 'password' | 'search' | 'url'
  autoComplete: AutoCompleteType
  autoFocus: boolean
  variant: 'filled' | 'outlined' | 'standard'
  placeholder?: string
  rows?: number
  size: 'small' | 'medium'
};

interface ControlledProps extends BaseProps {
  value?: string
  defaultValue?: never
}

interface UncontrolledProps extends BaseProps {
  value?: never
  defaultValue?: string
}

type Props = ControlledProps | UncontrolledProps

export const TextInputElement: React.FC<Props> = (
  {
    id,
    label,
    name,
    type,
    variant,
    helperText,
    autoComplete,
    autoFocus,
    placeholder,
    rows,
    size = 'medium',
    disabled,
    error,
    onChange,
    value,
    defaultValue
  }
): JSX.Element => {
  return (
    <TextField
      id={id}
      label={label}
      name={name}
      type={type}
      variant={variant}
      helperText={helperText}
      autoFocus={autoFocus}
      autoComplete={autoComplete}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      rows={rows}
      size={size}
      error={error}
      disabled={disabled}
      onChange={onChange}
      fullWidth
    />
  );
}
