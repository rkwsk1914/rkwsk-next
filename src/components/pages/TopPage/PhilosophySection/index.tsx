
import { useState } from 'react'

import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

import { useLanguage } from '@/i18n/LanguageProvider'

import { useGetDarkModeStyleClass } from '@/hooks/useGetDarkModeStyleClass'

import { SectionContainer } from '@/components/molecules/SectionContainer'

import { AiPhilosophyContent } from './AiPhilosophyContent'
import { ChangePhilosophyContent, EssencePhilosophyContent } from './PhilosophyContent'
import styles from './style.module.scss'

const philosophies = [
  {
    label: '01 — WITH AI',
    title: 'AIとともに',
    color: 'ai',
    content: <AiPhilosophyContent />,
  },
  {
    label: '02 — ESSENCE',
    title: '本質を意識する',
    color: 'essence',
    content: <EssencePhilosophyContent />,
  },
  {
    label: '03 — EMBRACE CHANGE',
    title: '変化を楽しむ',
    color: 'change',
    content: <ChangePhilosophyContent />,
  },
]

export const PhilosophySection = () => {
  const { t } = useLanguage()
  const [selected, setSelected] = useState<number | null>(null)
  const themeClassName = useGetDarkModeStyleClass(styles.theme, styles.dark)
  const philosophy = selected === null ? null : philosophies[selected]
  const close = () => setSelected(null)

  return (
    <SectionContainer id="philosophy" title="Philosophy">
      <div className={themeClassName}>
        <p className={styles.intro}>{t("開発で大切にしている、3つの考え方。")}</p>
        <div className={styles.circles}>
          {philosophies.map((item, index) => (
            <button
              key={item.label}
              type="button"
              className={`${styles.circle} ${styles[item.color]}`}
              aria-haspopup="dialog"
              onClick={() => setSelected(index)}
            >
              <span className={styles.label}>{item.label}</span>
              <span className={styles.title}>{t(item.title)}</span>
              <span className={styles.readMore}>{t("詳しく読む ↗")}</span>
            </button>
          ))}
        </div>
      </div>
      <Dialog
        open={philosophy !== null}
        onClose={close}
        aria-labelledby="philosophy-title"
        maxWidth="md"
        fullWidth
      >
        {philosophy && (
          <div className={`${themeClassName} ${styles.dialog} ${styles[philosophy.color]}`}>
            <div className={styles.dialogHeader}>
              <span className={styles.label}>{philosophy.label}</span>
              <button type="button" className={styles.close} onClick={close} aria-label={t("モーダルを閉じる")}>×</button>
            </div>
            <DialogTitle id="philosophy-title" className={styles.dialogTitle}>{t(philosophy.title)}</DialogTitle>
            <DialogContent id="philosophy-content" className={styles.dialogContent} tabIndex={0}>
              {philosophy.content}
            </DialogContent>
          </div>
        )}
      </Dialog>
    </SectionContainer>
  )
}
