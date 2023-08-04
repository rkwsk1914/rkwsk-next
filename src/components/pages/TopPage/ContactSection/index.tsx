import * as React from 'react'

import { ContactForm } from '@/components/forms/templates/ContactForm'
import { SectionContainer } from '@/components/molecules/SectionContainer'


// import styles from './style.module.scss'

type Props = {}

export const ContactSection: React.FC<Props> = ({}): JSX.Element => {
  return (
    <SectionContainer id={'contact'} title={'Contact'}>
      <ContactForm onSubmit={() => console.log('submit')}/>
    </SectionContainer>
  )
}
