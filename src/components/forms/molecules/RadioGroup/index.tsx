import * as React from 'react';

import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';

import { RadioElement } from '@/components/forms/atoms/RadioElement'
import { InputAttributeTypes } from '@/types/InputAttribute'

interface Props extends InputAttributeTypes {
  focused: boolean
  data: Array<Omit<React.ComponentProps<typeof RadioElement>, "onChange" | "defaultChecked" | "name">>
};

export const RadioGroup: React.FC<Props> = (
  {
    label,
    name,
    required,
    error,
    helperText,
    focused,
    onChange,
    data
  }
): JSX.Element => {
  return (
    <FormControl
      required={required}
      error={error}
      focused={focused}
      component="fieldset"
      fullWidth
    >
      <FormLabel component="legend">{label}</FormLabel>
      <FormGroup>
        {data.map((item, index) => (
          <RadioElement
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
  );
}
