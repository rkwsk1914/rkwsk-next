import * as React from 'react';

import Switch from '@mui/material/Switch';

interface BaseProps {
  icon?: React.ReactNode
  checkedIcon?: React.ReactNode
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

interface ControlledProps extends BaseProps {
  checked?: boolean
  defaultChecked?: never
}

interface UncontrolledProps extends BaseProps {
  checked?: never
  defaultChecked?: boolean
}

type Props = ControlledProps | UncontrolledProps

export const SwitchElement: React.FC<Props> = (
  {
    defaultChecked,
    icon,
    checkedIcon,
    checked,
    onChange
  }
): JSX.Element => {
  return (
    <Switch
      defaultChecked={defaultChecked}
      icon={icon}
      checkedIcon={checkedIcon}
      checked={checked}
      onChange={onChange}
    />
  );
}
