import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'

import { RatingElement } from '@/components/forms/atoms/RatingElement'

interface BaseProps {
  data: { [index: string]: string }
}

type Props = BaseProps & React.ComponentProps<typeof RatingElement>

export const RatingWithStatus: React.FC<Props> = (
  {
    data,
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
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
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
      <Box sx={{ ml: 2 }}>{data[value ? value : defaultValue ? defaultValue : 0]}</Box>
    </Box>
  )
}
