import { NextPage } from 'next'

import { ParallaxTest } from '@/components/sample/ParallaxTest'

type SSGProps = {}

const Top: NextPage<SSGProps> = () => {
  return (
    <ParallaxTest />
  )
}

export default Top