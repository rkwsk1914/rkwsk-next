import { useRef } from 'react'

import { ParallaxProvider, useParallax } from 'react-scroll-parallax'

import styles from './style.module.scss'

type Props = {
  children?: React.ReactNode
}

type ContainerProps = {
  children?: React.ReactNode
  scrollAxis?: 'vertical' | 'horizontal'
  className?: string
}

const Component = () => {

  const parallax = useParallax<HTMLDivElement>({
    translateY: [0, 0],
    translateX: [0, 0],
    speed: 300,
  })

  return (
    <div className={styles.fix}>
      <div ref={parallax.ref} className={styles.div} />
    </div>
  )
}

const Container = ({ children, scrollAxis = 'vertical', className }: ContainerProps) => {

  return (
  <ParallaxProvider scrollAxis={scrollAxis}>
    <div className={scrollAxis}>
      <div className={className} >{children}</div>
    </div>
  </ParallaxProvider>
)}

export const ParallaxTest: React.FC<Props> = (): JSX.Element => {
  const ref = useRef(null)
  return (
    <Container scrollAxis="vertical" className={styles.wrap}>
      <Component />
    </Container>
  )
}
