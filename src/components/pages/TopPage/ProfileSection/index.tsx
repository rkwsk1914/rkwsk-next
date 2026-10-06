import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { useGetDarkModeStyleClass } from '@/hooks/useGetDarkModeStyleClass'

import { EXTERNAL_LINKS } from '@/const/ExternalLinks'
import { ICON_DATA } from '@/const/IconData'
import { GLOBAL_NAV_DATA } from '@/const/page/GlobalNavData'


import { ModalComponent } from '@/components/molecules/ModalComponent'
import { SectionContainer } from '@/components/molecules/SectionContainer'

import { ProfileHero } from './ProfileHero'
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

  const profileImage: Omit<React.ComponentProps<typeof Image>, 'alt' | 'className'> = {
    src: '/pic-me.jpg',
    width: 1478,
    height: 1108,
    loading: 'eager',
  }

  const ProfileContentArea = () => {
    const areaClassName = useGetDarkModeStyleClass(styles.link_btn_area, styles.dark)
    return (
      <div className={areaClassName}>
        <Link href={EXTERNAL_LINKS.myGitHub} className={styles.link_btn} aria-label="GitHub" title="GitHub">
          <span className={styles.github_icon}>{ICON_DATA.gitHub}</span>
        </Link>
        <Link href={EXTERNAL_LINKS.instagram} className={styles.link_btn} aria-label="Instagram" title="Instagram">
          <Image src="/instagram.svg" alt="" width={42} height={48} className={styles.instagram_icon} />
        </Link>
        <Link href={EXTERNAL_LINKS.zenn} className={styles.link_btn} aria-label="Zenn" title="Zenn">
          <Image src="/zenn.svg" alt="" width={48} height={48} className={styles.zenn_icon} />
        </Link>
      </div>
    )
  }

  return (
    <SectionContainer id={GLOBAL_NAV_DATA.profile.id}>
      <ProfileHero image={profileImage}>
        <ProfileContentArea />
      </ProfileHero>
      <ModalComponent isOpen={open} onClose={handleClose}>
        sample
      </ModalComponent>
    </SectionContainer>
  )
}
