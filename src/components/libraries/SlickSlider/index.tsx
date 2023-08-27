import { useRef, useEffect } from 'react'

import clsx from 'clsx'
import Slider, { Settings, CustomArrowProps } from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { useGetDarkModeStyleClass } from '@/hooks/useGetDarkModeStyleClass'

import { ICON_DATA } from '@/const/IconData'

import styles from './style.module.scss'

export type OriginalSettings = Settings

type Props = {
  children?: React.ReactNode
  settings: OriginalSettings
  externalSlideNumber?: number | null
}

type DotProps = {
  active: boolean
  className?: string
  onClick: () => void
}

const NextButton: React.FC<CustomArrowProps>= ({
  onClick
}): JSX.Element => {
  return (
    <button
      className={clsx(styles.arrowButton, styles.left)}
      onClick={onClick}
      aria-label={'slide next button'}
    >{ICON_DATA.circleChevronLeft}</button>
  )
}

const PrevButton: React.FC<CustomArrowProps>= ({
  onClick
}): JSX.Element => {
  return (
    <button
      className={clsx(styles.arrowButton, styles.right)}
      onClick={onClick}
      aria-label={'slide previous button'}
    >{ICON_DATA.circleChevronRight}</button>
  )
}

const CustomDot: React.FC<DotProps>= ({
  active,
  onClick
}): JSX.Element => {
  return (
    <div
      className={clsx(
        styles.dotItem,
        {
          [styles.active]: active
        }
      )}
      onClick={onClick} />
    )
}

export const SlickSlider: React.FC<Props> = ({
  children,
  settings,
  externalSlideNumber
}): JSX.Element => {
  // const [isStopped, setIsStopped] = useState(false)

  const wrapClassName = useGetDarkModeStyleClass(styles.sliderWrap, styles.dark)
  const sliderRef = useRef<Slider>(null)

  /*
  const slickPlay = () => {
    sliderRef.current?.slickPlay()
    setIsStopped(false)
  }

  const slickPause = () => {
    sliderRef.current?.slickPause()
    setIsStopped(true)
  }

  const handleClickSliderPrev = () => {
    if (sliderRef?.current) {
      sliderRef.current.slickPrev()
    }
  }

  const handleClickSliderNext = () => {
    if (sliderRef?.current) {
      sliderRef.current.slickNext()
    }
  }
  */

  const handleClickSlickGoTo = (
    slideNumber: number, dontAnimate?: boolean
  ) => {
    if (sliderRef?.current) {
      sliderRef.current.slickGoTo(slideNumber, dontAnimate)
    }
  }

  const AppendDots = (dots: React.ReactElement<DotProps>[]) => {
    return (
      <div className={styles.dots}>
        {dots.map((dot: React.ReactElement<DotProps>, index) => (
          <CustomDot
            key={index}
            active={dot.props.className === "slick-active"}
            onClick={() => {
              handleClickSlickGoTo(index)
            }} />
        ))}
      </div>
    )
  }

  useEffect(() => {
    if (externalSlideNumber || externalSlideNumber === 0) {
      handleClickSlickGoTo(externalSlideNumber)
    }
  }, [externalSlideNumber])

  const mySettings: Settings = settings
  mySettings.prevArrow = mySettings.prevArrow ?? <NextButton />
  mySettings.nextArrow = mySettings.nextArrow ?? <PrevButton />
  mySettings.dotsClass = mySettings.dotsClass ?? styles.dots
  mySettings.appendDots = AppendDots

  return (
    <div className={clsx({
      [wrapClassName]: mySettings.dots,
    })}>
      <Slider ref={sliderRef} {...mySettings}>
        {children}
      </Slider>
    </div>
  )
}
