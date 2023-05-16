import { NextPage } from 'next'

import { TopPage } from '@/components/pages/TopPage'
import { ThemeContextProvider } from '@/stores/ThemeContext'

type SSGProps = {}

const Top: NextPage<SSGProps> = () => {
  return (
    <ThemeContextProvider defaultMode='light'>
      <TopPage/>
    </ThemeContextProvider>
  )
}

export default Top