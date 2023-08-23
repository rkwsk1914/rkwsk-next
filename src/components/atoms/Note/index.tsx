import * as React from 'react'

import { useGetDarkModeStyleClass } from '@/hooks/useGetDarkModeStyleClass'

import styles from './style.module.scss'

type Props = {
  data: Array<React.ReactNode>
  type?: 'asterisk' | 'number' | 'dot'
};

export const Note: React.FC<Props> = (
  {
    data,
    type = 'dot'
  }
): JSX.Element => {
  const classNameUl = useGetDarkModeStyleClass(styles.ul, styles.dark)

  if(data.length === 0) return <></>

  return (
    <ul className={classNameUl}>
      {data.map((item, index) => (
        <li key={index} className={styles.li}>
          {type === 'asterisk' && <span>※{index + 1}</span>}
          {type === 'number' && <span>{index + 1}.</span>}
          {type === 'dot' && <span>・</span>}
          <div>{item}</div>
        </li>
      ))}
    </ul>
  )
}
