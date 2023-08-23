import * as React from 'react'

import { GLOBAL_NAV_DATA } from '@/const/page/GlobalNavData'

import { ContactForm } from '@/components/forms/templates/ContactForm'
import { SectionContainer } from '@/components/molecules/SectionContainer'


// import styles from './style.module.scss'

type Props = {}

export const ContactSection: React.FC<Props> = ({}): JSX.Element => {
  return (
    <SectionContainer id={GLOBAL_NAV_DATA.contact.id} title={GLOBAL_NAV_DATA.contact.text}>
      <ContactForm onSubmit={() => console.log('submit')}/>
    </SectionContainer>
  )
}
