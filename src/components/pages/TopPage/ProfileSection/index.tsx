import { useState } from 'react'

import Link from 'next/link'

import { useGetDarkModeStyleClass } from '@/hooks/useGetDarkModeStyleClass'

import { EXTERNAL_LINKS } from '@/const/ExternalLinks'
import { ICON_DATA } from '@/const/IconData'
import { GLOBAL_NAV_DATA } from '@/const/page/GlobalNavData'


import { ModalComponent } from '@/components/molecules/ModalComponent'
import { ProFileImage } from '@/components/molecules/ProFileImage'
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
    height: 1108,
  }

  const ProfileContentArea = () => {
    const areaClassName = useGetDarkModeStyleClass(styles.link_btn_area, styles.dark)
    return (
      <div className={areaClassName}>
        <Link href={EXTERNAL_LINKS.myGitHub} className={styles.link_btn}>
          {ICON_DATA.gitHub}
        </Link>
        <Link href={EXTERNAL_LINKS.instagram} className={styles.link_btn}>
          {ICON_DATA.instagram}
        </Link>
      </div>
    )
  }

  return (
    <SectionContainer id={GLOBAL_NAV_DATA.profile.id}>
      <ProFileImage image={profileImage}>
        <ProfileContentArea />
      </ProFileImage>
      <ModalComponent isOpen={open} onClose={handleClose}>
        sample
      </ModalComponent>
    </SectionContainer>
  )
}
