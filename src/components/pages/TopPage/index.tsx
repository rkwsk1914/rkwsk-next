import * as React from 'react'

import { HeaderLogo } from '@/components/molecules/HeaderLogo'
import { MySite } from '@/components/templates/MySite'
import HISTORY_DATA from '@/const/page/HistoryData'

import { MyHistorySection } from './MyHistorySection'
import styles from './style.module.scss'

type Props = {};

export const TopPage: React.FC<Props> = (): JSX.Element => {


  return (
    <MySite title={'rkwsk'} description={'rkwsk'}>
      <HeaderLogo />
      <div className={styles.firstViewBg} />
      <MyHistorySection data={HISTORY_DATA} />
    </MySite>
  )
}
