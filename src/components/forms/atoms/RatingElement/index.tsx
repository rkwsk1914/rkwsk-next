import * as React from 'react'

import Rating from '@mui/material/Rating'

import { InputAttributeTypes } from '@/types/InputAttribute'
import { MuiSizeTypes } from '@/types/MuiSize'

interface BaseProps extends Omit<InputAttributeTypes, 'value' | 'onChange'> {
  size?: MuiSizeTypes
  max: number
  precision: 0.5 | 1
  readOnly?: boolean
  onChange?: (e: React.SyntheticEvent<Element, Event>) => void
}

interface ControlledProps extends BaseProps {
  value?: number
  defaultValue?: never
}

interface UncontrolledProps extends BaseProps {
  value?: never
  defaultValue?: number
}

type Props = ControlledProps | UncontrolledProps

export const RatingElement: React.FC<Props> = (
  {
    name,
    size = 'medium',
    max,
    precision,
    disabled,
    readOnly,
    onChange,
    value,
    defaultValue
  }
): JSX.Element => {
  return (
    <Rating
      name={name}
      max={max}
      precision={precision}
      value={value}
      defaultValue={defaultValue}
      readOnly={readOnly}
      size={size}
      disabled={disabled}
      onChange={onChange}
    />
  )
}
