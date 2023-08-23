import * as React from 'react'

import { SkillSetTableItem } from '@/components/molecules/SkillSetTableItem'

import styles from './style.module.scss'

type Props = {
  data: Array<React.ComponentProps<typeof SkillSetTableItem>>
};

export const SkillSetTable: React.FC<Props> = ({
  data
}): JSX.Element => {

  return (
    <table className={styles.table}>
      <colgroup>
        <col className={styles.col_1}/>
        <col className={styles.col_2}/>
        <col className={styles.col_3}/>
        <col className={styles.col_4}/>
      </colgroup>
      <tbody>
        <tr className={styles.first_row}>
          <th></th>
          <th>level of skill</th>
          <th>Years of experience</th>
          <th>Experience</th>
        </tr>
        {data.map((item, index) => (
          <SkillSetTableItem
            key={index}
            skillName={item.skillName}
            value={item.value}
            acquisitionDate={item.acquisitionDate}
            category={item.category} />
        ))}
      </tbody>
    </table>
  )
}
