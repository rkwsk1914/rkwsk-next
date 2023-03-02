import * as React from 'react'

import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'

import { InputAttributeTypes } from '@/types/InputAttribute'

interface BaseProps extends Pick<InputAttributeTypes, 'label' | 'value' | 'name' | 'onChange'| 'disabled'> {
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

export const RadioElement: React.FC<Props> = (
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
    <Radio
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
        <Radio
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
