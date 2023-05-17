import { NextPage } from 'next'

import { TopPage } from '@/components/pages/TopPage'

type SSGProps = {}

const Top: NextPage<SSGProps> = () => {
  return (
    <TopPage/>
  )
}

export default Top