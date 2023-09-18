import * as React from 'react'

import { useRouter } from "next/router"

import { useGetDarkModeStyleClass } from '@/hooks/useGetDarkModeStyleClass'

import { GLOBAL_NAV_DATA, GLOBAL_TOP_NAV_DATA } from '@/const/page/GlobalNavData'

import { MenuList } from '@/components/molecules/MenuList'



import styles from './style.module.scss'

import { MenuDataType } from '@/types/MenuDataType'

type Props = {
  children?: React.ReactNode
};

export const MyFooter: React.FC<Props> = (
  {
    children
  }
): JSX.Element => {
  const footerClassName = useGetDarkModeStyleClass(styles.footer, styles.dark)
  const router = useRouter()

  const getGlobalNavDataArray = (): MenuDataType[] => {
    const data = (router.pathname === '/') ? GLOBAL_TOP_NAV_DATA : GLOBAL_NAV_DATA
    const keys = Object.keys(data)

    return keys.map(key => data[key])
  }

  return (
    <footer className={footerClassName}>
      <MenuList data={getGlobalNavDataArray()} type='horizontality' />
    </footer>
  )
}
