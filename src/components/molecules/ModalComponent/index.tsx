import { useState } from 'react'

import Modal from '@mui/material/Modal'

import { MyCard } from '@/components/atoms/MyCard'
import { ButtonElement } from '@/components/forms/atoms/ButtonElement'

import styles from './style.module.scss'

interface BaseProps {
  children?: React.ReactNode
}
interface WithButton extends BaseProps {
  buttonText?: string
  onClose?: never
  isOpen?: never
}
interface WithoutButton extends BaseProps {
  buttonText?: never
  onClose?: (event?: React.MouseEvent<HTMLButtonElement>) => void
  isOpen?: boolean
}

type Props = WithButton | WithoutButton

export const ModalComponent: React.FC<Props> = (
  {
    children,
    buttonText,
    onClose,
    isOpen = false,
  }
): JSX.Element => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => onClose ? onClose() : setOpen(false)

  return (
    <div>
      {buttonText && (
        <ButtonElement onClick={handleOpen}>{buttonText}</ButtonElement>
      )}
      <Modal
        open={isOpen || open}
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
