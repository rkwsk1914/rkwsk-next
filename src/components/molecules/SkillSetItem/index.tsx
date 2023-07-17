import * as React from 'react'

import { RatingElement } from '@/components/forms/atoms/RatingElement'

type Props = {
  children?: React.ReactNode
  value: number
  acquisitionDate?: string
};

export const SkillSetItem: React.FC<Props> = ({
  children,
  value,
  acquisitionDate
}): JSX.Element => {

  const checkDateFormat = ():boolean => {
    if (acquisitionDate) {
      const datePattern = /^\d{4}-\d{2}-\d{2}$/
      const regex = new RegExp(datePattern)
      return regex.test(acquisitionDate)
    }

    return false
  }

  const calculateYearsOfExperience = (): number | '-' => {
    const check = checkDateFormat()
    if (check && acquisitionDate) {
      const today = new Date()
      const startDay = new Date(acquisitionDate)
      const monthDiff = today.getMonth() - startDay.getMonth()

      if (monthDiff < 0) return today.getFullYear() - 1 - startDay.getFullYear()
      return today.getFullYear() - startDay.getFullYear()
    }

    return '-'
  }

  return (
    <tr>
      <th>{children}</th>
      <td>
        <RatingElement
          max={5}
          precision={0.5}
          readOnly
          value={value}
          label=''
          name=''
          error={false}
          helperText=''
        />
      </td>
      <td>{calculateYearsOfExperience()}</td>
    </tr>
  )
}
