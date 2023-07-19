import * as React from 'react'

import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import FormHelperText from '@mui/material/FormHelperText'
import FormLabel from '@mui/material/FormLabel'

import { CheckboxElement } from '@/components/forms/atoms/CheckboxElement'

import { InputAttributeTypes } from '@/types/InputAttribute'

interface Props extends InputAttributeTypes {
  focused: boolean
  data: Array<React.ComponentProps<typeof CheckboxElement>>
}

export const CheckboxGroup: React.FC<Props> = (
  {
    label,
    name,
    error,
    helperText,
    focused,
    onChange,
    data
  }
): JSX.Element => {
  return (
    <FormControl
      error={error}
      focused={focused}
      component="fieldset"
      fullWidth
    >
      <FormLabel component="legend">{label}</FormLabel>
      <FormGroup>
        {data.map((item, index) => (
          <CheckboxElement
            key={index}
            name={name}
            label={item.label}
            value={item.value}
            size={item.size}
            checked={item.checked}
            icon={item.icon}
            checkedIcon={item.checkedIcon}
            disabled={item.disabled}
            onChange={onChange}
          />
        ))
        }
      </FormGroup>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  )
}
