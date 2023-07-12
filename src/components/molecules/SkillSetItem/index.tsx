

import { RatingElement } from '@/components/forms/atoms/RatingElement'

type Props = {
  children?: React.ReactNode
  value: number
};

export const SkillSetItem: React.FC<Props> = ({
  children,
  value
}): JSX.Element => {
  return (
    <li>
      <span>{children}</span>
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
    </li>
  )
}
