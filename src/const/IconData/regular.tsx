import React from 'react'

import { config } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

config.autoAddCss = false

export const ICON_REGULAR_DATA = {
  regularStar: <FontAwesomeIcon icon={faStar} />,
}