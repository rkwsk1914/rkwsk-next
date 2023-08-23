import React from 'react'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '@fortawesome/fontawesome-free'
import {
  faAws,
  faReact,
  faVuejs,
  faDocker,
  faHtml5,
  faCss3Alt,
  faSass,
  faPhp,
  faSquareJs,
  faPython,
  faWordpress,
  faShopify,
  faLaravel,
  faGoogle,
  faGithub,
  faGitAlt,
  faTwitter,
  faInstagram,
  faFigma,
  faApple,
  faSlack,
  faWindows,
  faNode,
  faMicrosoft,
} from '@fortawesome/free-brands-svg-icons'
// import {  } from '@fortawesome/free-regular-svg-icons'
// import {  } from '@fortawesome/fontawesome-common-types'
// import {  } from '@fortawesome/free-regular-svg-icons'
import {
  faCircleChevronRight,
  faCircleChevronLeft,
  faCircleChevronUp,
  faGraduationCap,
  faLaptopFile,
  faStar
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

config.autoAddCss = false

export const ICON_DATA = {
  aws: <FontAwesomeIcon icon={faAws} />,
  react: <FontAwesomeIcon icon={faReact} />,
  html5: <FontAwesomeIcon icon={faHtml5} />,
  vue: <FontAwesomeIcon icon={faVuejs} />,
  css3: <FontAwesomeIcon icon={faCss3Alt} />,
  sass: <FontAwesomeIcon icon={faSass} />,
  docker: <FontAwesomeIcon icon={faDocker} />,
  php: <FontAwesomeIcon icon={faPhp} />,
  python: <FontAwesomeIcon icon={faPython} />,
  shopify: <FontAwesomeIcon icon={faShopify} />,
  wordpress: <FontAwesomeIcon icon={faWordpress} />,
  javascript: <FontAwesomeIcon icon={faSquareJs} />,
  typescript: <></>,
  jquery: <></>,
  nextJs: <></>,
  ruby: <></>,
  rubyOnRails: <></>,
  laravel: <FontAwesomeIcon icon={faLaravel} />,
  gitHub: <FontAwesomeIcon icon={faGithub} />,
  google: <FontAwesomeIcon icon={faGoogle} />,
  git: <FontAwesomeIcon icon={faGitAlt} />,
  twitter: <FontAwesomeIcon icon={faTwitter} />,
  instagram: <FontAwesomeIcon icon={faInstagram} />,
  figma: <FontAwesomeIcon icon={faFigma} />,
  apple: <FontAwesomeIcon icon={faApple} />,
  slack: <FontAwesomeIcon icon={faSlack} />,
  windows: <FontAwesomeIcon icon={faWindows} />,
  nodeJs: <FontAwesomeIcon icon={faNode} />,
  microsoft: <FontAwesomeIcon icon={faMicrosoft} />,
  circleChevronRight: <FontAwesomeIcon icon={faCircleChevronRight} />,
  circleChevronLeft: <FontAwesomeIcon icon={faCircleChevronLeft} />,
  circleChevronUp: <FontAwesomeIcon icon={faCircleChevronUp} />,
  study: <FontAwesomeIcon icon={faGraduationCap} />,
  laptopFile: <FontAwesomeIcon icon={faLaptopFile} />,
  star: <FontAwesomeIcon icon={faStar} />,
}