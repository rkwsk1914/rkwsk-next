import * as React from 'react'

import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

import { InputAttributeTypes } from '@/types/InputAttribute'

interface BaseProps extends Omit<InputAttributeTypes, 'error' | 'helperText'> {
  value: number | string
  size: 'small' | 'medium'
  icon?: React.ReactNode
  checkedIcon?: React.ReactNode
}

interface ControlledProps extends BaseProps {
  checked?: boolean
  defaultChecked?: never
}

interface UncontrolledProps extends BaseProps {
  checked?: never
  defaultChecked?: boolean
}

type Props = ControlledProps | UncontrolledProps

export const CheckboxElement: React.FC<Props> = (
  {
    label,
    name,
    value,
    defaultChecked,
    checked,
    size = 'medium',
    icon,
    checkedIcon,
    disabled,
    onChange
  }
): JSX.Element => {
  if (!label) return (
    <Checkbox
      value={value}
      name={name}
      disabled={disabled}
      checked={checked}
      defaultChecked={defaultChecked}
      size={size}
      icon={icon}
      checkedIcon={checkedIcon}
      onChange={onChange}
    />
  )

  return (
    <FormControlLabel
      control={
        <Checkbox
          value={value}
          name={name}
          disabled={disabled}
          checked={checked}
          defaultChecked={defaultChecked}
          size={size}
          icon={icon}
          checkedIcon={checkedIcon}
          onChange={onChange}
        />
      }
      label={label}
    />
  )
}
