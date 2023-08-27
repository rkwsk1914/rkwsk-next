import React from 'react'

import {
  faCircleChevronRight,
  faCircleChevronLeft,
  faCircleChevronUp,
  faGraduationCap,
  faLaptopFile,
  faStar,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ICON_SOLID_DATA = {
  circleChevronRight: <FontAwesomeIcon icon={faCircleChevronRight} />,
  circleChevronLeft: <FontAwesomeIcon icon={faCircleChevronLeft} />,
  circleChevronUp: <FontAwesomeIcon icon={faCircleChevronUp} />,
  study: <FontAwesomeIcon icon={faGraduationCap} />,
  laptopFile: <FontAwesomeIcon icon={faLaptopFile} />,
  star: <FontAwesomeIcon icon={faStar} />,
  arrowRight: <FontAwesomeIcon icon={faArrowRight} />
}