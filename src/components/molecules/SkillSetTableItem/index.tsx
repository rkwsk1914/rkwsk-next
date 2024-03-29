import * as React from 'react'

import { useTheme } from '@mui/material/styles'
import clsx from 'clsx'

import { useGetDarkModeStyleClass } from '@/hooks/useGetDarkModeStyleClass'

import { ICON_DATA } from '@/const/IconData'

import { RatingElement } from '@/components/forms/atoms/RatingElement'

import styles from './style.module.scss'

import { SkillSetItemDataType } from '@/types/SkillSetDateType'

type Props = SkillSetItemDataType;

export const SkillSetTableItem: React.FC<Props> = ({
  skillName,
  value,
  acquisitionDate,
  category
}): JSX.Element => {
  const theme = useTheme()

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

  const starClassName = useGetDarkModeStyleClass(styles.star, styles.dark)

  const categoryIcon = () => {
    const isDarkMode = theme.palette.mode === 'dark'
    return category === 'self-studying' ?
      ICON_DATA.study :
      isDarkMode ? ICON_DATA.star : ICON_DATA.regularStar
  }

  return (
    <tr className={styles.tr}>
      <th className={styles.skillName}>{skillName}</th>
      <td className={styles.value}>
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
      <td className={styles.yearsOfExperience}>{calculateYearsOfExperience()}</td>
      <td className={styles.category}>
        <span className={clsx({
          [starClassName]: category === 'work-experience',
        })}>{categoryIcon()}</span>
      </td>
    </tr>
  )
}
