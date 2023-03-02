import { useState } from 'react'

import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import Chip from '@mui/material/Chip'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import InputLabel from '@mui/material/InputLabel'
import ListItemText from '@mui/material/ListItemText'
import MenuItem from '@mui/material/MenuItem'
import OutlinedInput from '@mui/material/OutlinedInput'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { Theme, useTheme } from '@mui/material/styles'

import { InputAttributeTypes } from '@/types/InputAttribute'


interface BaseProps extends Omit<InputAttributeTypes, 'value'> {
  title: string
  selectItems: Array<string>
  variant: 'filled' | 'outlined' | 'standard'
  size: 'small' | 'medium'
  multiple?: boolean
}

interface ControlledProps extends BaseProps {
  value?: string
  defaultValue?: never
}

interface UncontrolledProps extends BaseProps {
  value?: never
  defaultValue?: string
}

type Props = ControlledProps | UncontrolledProps

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  }
}

export const SelectElement: React.FC<Props> = (
  {
    id,
    label,
    title,
    selectItems,
    variant,
    multiple,
    error,
    helperText,
    disabled
  }
): JSX.Element => {
  const theme = useTheme()
  const [value, setValue] = useState< string | string[]>(multiple ? [] : '')

  const handleChange = (e: SelectChangeEvent<typeof value>) => {
    const newValue = e.target.value

    setValue(
      // On autofill we get a stringified value.
      typeof newValue === 'string' ? newValue.split(',') : newValue,
    )
  }

  const labelId = `${id}-label`
  const outlineId = `${id}-outline-id`

  return (
    <FormControl fullWidth error={error}>
      <InputLabel id={labelId} variant={variant} >{title}</InputLabel>
      <Select
        labelId={labelId}
        id={id}
        multiple={multiple}
        value={value}
        variant={variant}
        onChange={handleChange}
        input={<OutlinedInput id={outlineId} label={label} />}
        renderValue={(selected) => {
          if (!multiple) return (value)

          return (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {typeof selected === 'object' && selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )
        }}
        MenuProps={MenuProps}
        disabled={disabled}
      >
        {selectItems.map((selectItem) => (
          <MenuItem
            key={selectItem}
            value={selectItem}
            style={typeof value === 'object' ? getStyles(selectItem, value, theme) : undefined}
          >
            <Checkbox checked={value.indexOf(selectItem) > -1} />
            <ListItemText primary={selectItem} />
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  )
}
