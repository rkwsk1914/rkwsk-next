import * as React from 'react'

import { SkillSetTableItem } from '@/components/molecules/SkillSetTableItem'

type Props = {
  data: Array<React.ComponentProps<typeof SkillSetTableItem>>
};

export const SkillSetTable: React.FC<Props> = ({
  data
}): JSX.Element => {

  return (
    <table>
      <colgroup>
        <col />
        <col />
        <col />
      </colgroup>
      <tbody>
        {data.map((item, index) => (
          <SkillSetTableItem
            key={index}
            skillName={item.skillName}
            value={item.value}
            acquisitionDate={item.acquisitionDate} />
        ))}
      </tbody>
    </table>
  )
}
