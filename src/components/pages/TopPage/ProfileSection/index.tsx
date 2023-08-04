import { useState } from 'react'

import { ProFileImage } from '@/components/atoms/ProFileImage'
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
    <SectionContainer id={'profile'} title={'Profile'}>
      <section className={styles.area}>
        <ProFileImage
          name={name}
          image={profileImage}
          sectionLevel={3}
          buttonText='Detail'
          onClick={handleOpen}
        />
        <ModalComponent isOpen={open} onClose={handleClose}>
          sample
        </ModalComponent>
      </section>
    </SectionContainer>
  )
}
