import React from 'react'

import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'

import { useGetDarkModeStyleClass } from '@/hooks/useGetDarkModeStyleClass'

import styles from './style.module.scss'

type Props = {
  children?: React.ReactNode
  isOpen?: boolean
  callBack?: (e: React.MouseEvent<HTMLButtonElement>) => void
};

export const MenuButton: React.FC<Props> = (
  {
    isOpen,
    callBack
  }
): JSX.Element => {

  const className = useGetDarkModeStyleClass(styles.button, styles.dark)
  return (
    <button className={className} onClick={callBack}>
      {(isOpen) ? (
        <>
          <CloseIcon />
          <span>close</span>
        </>
      ) : (
        <>
          <MenuIcon />
          <span>menu</span>
        </>
      )}
    </button>
  )
}
