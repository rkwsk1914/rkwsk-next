import '@fortawesome/fontawesome-svg-core/styles.css'
import '@fortawesome/fontawesome-free'

import { config } from '@fortawesome/fontawesome-svg-core'

// import {  } from '@fortawesome/free-regular-svg-icons'
// import {  } from '@fortawesome/fontawesome-common-types'

import { ICON_BRANDS_DATA } from './brands'
import { ICON_REGULAR_DATA } from './regular'
import { ICON_SOLID_DATA } from './solid'

config.autoAddCss = false

export const ICON_DATA = {
  ...ICON_REGULAR_DATA,
  ...ICON_BRANDS_DATA,
  ...ICON_SOLID_DATA,
}