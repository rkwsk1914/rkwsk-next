import { useState } from 'react'

import { GLOBAL_NAV_DATA } from '@/const/page/GlobalNavData'

import { LiquidShapeImage } from '@/components/atoms/LiquidShapeImage'
import { ModalComponent } from '@/components/molecules/ModalComponent'
import { SectionContainer } from '@/components/molecules/SectionContainer'

import styles from './style.module.scss'

type Props = {}

export const ProfileSection: React.FC<Props> = ({}): JSX.Element => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const profileImage = {
    src: '/pic-me.jpg',
    width: 1478,
    height: 1108
  }

  const name = {
    firstName: 'Kawasaki',
    lastName: 'Ryo'
  }

  return (
    <SectionContainer id={GLOBAL_NAV_DATA.profile.id}>
      <section className={styles.area}>
        <LiquidShapeImage image={{
          src: '/pic-me.jpg',
          width: 1478,
          height: 1108,
          alt: 'profile'
        }} />
        <ModalComponent isOpen={open} onClose={handleClose}>
          sample
        </ModalComponent>
      </section>
    </SectionContainer>
  )
}
