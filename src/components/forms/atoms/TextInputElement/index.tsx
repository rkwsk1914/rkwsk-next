import * as React from 'react'

import TextField from '@mui/material/TextField'

import { TextInputBaseProps } from '@/types/InputAttribute'

interface ControlledProps extends TextInputBaseProps {
  value?: string
  defaultValue?: never
}

interface UncontrolledProps extends TextInputBaseProps {
  value?: never
  defaultValue?: string
}

type RefProps = ControlledProps | UncontrolledProps

export const TextInputElement = React.forwardRef(
    function RefComponent (
      {
        id,
        label,
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
        multiline = false,
        size = 'medium',
        value,
        defaultValue
      }: RefProps,
      ref?: React.Ref<HTMLInputElement>
    ): JSX.Element {
  return (
    <TextField
      id={id}
      label={label}
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
      multiline={multiline}
      size={size}
      value={value}
      defaultValue={defaultValue}
      fullWidth
      inputRef={ref}
    />
  )
})
