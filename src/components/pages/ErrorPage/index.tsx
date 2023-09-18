import * as React from 'react'

import { ErrorPageData } from '@/const/ErrorPageData'

import { Button } from '@/components/atoms/Button'
import { SectionContainer } from '@/components/molecules/SectionContainer'
import { MySite } from '@/components/templates/MySite'

import styles from './style.module.scss'

type Props = {
  errorId: keyof typeof ErrorPageData
};

export const ErrorPage: React.FC<Props> = ({
  errorId
}): JSX.Element => {
  return (
    <MySite title={ErrorPageData[errorId].title} description={ErrorPageData[errorId].description}>
      <SectionContainer level={1} title={ErrorPageData[errorId].content} isFull>
        <div className={styles.button_wrap} >
          <Button href='/' type='outline' >トップページに戻る</Button>
        </div>
      </SectionContainer>
    </MySite>
  )
}