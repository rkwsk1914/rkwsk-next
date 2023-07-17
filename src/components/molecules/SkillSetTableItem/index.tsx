import * as React from 'react'

import { RatingElement } from '@/components/forms/atoms/RatingElement'
import { SkillSetDateType } from '@/types/SkillSetDateType'

type Props = SkillSetDateType;

export const SkillSetTableItem: React.FC<Props> = ({
  skillName,
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
      <th>{skillName}</th>
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
