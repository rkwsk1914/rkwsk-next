import * as React from 'react'

import Modal from '@mui/material/Modal'

import { MyCard } from '@/components/atoms/MyCard'
import { ButtonElement } from '@/components/forms/atoms/ButtonElement'

import styles from './style.module.scss'

type Props = {
  children?: React.ReactNode
  buttonText?: string
}

export const ModalComponent: React.FC<Props> = (
  {
    children,
    buttonText,
  }
): JSX.Element => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      {buttonText && (
        <ButtonElement onClick={handleOpen}>{buttonText}</ButtonElement>
      )}
      <Modal
        open={open}
        onClose={handleClose}
      >
        <div className={styles.modalContent}>
          <MyCard>
            {children}
          </MyCard>
        </div>
      </Modal>
    </div>
  )
}
