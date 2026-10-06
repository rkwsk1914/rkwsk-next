import { GlobalNavMenuType } from '@/types/MenuDataType'

export const GLOBAL_TOP_NAV_DATA: GlobalNavMenuType = {
  profile: { text: 'Profile', id: 'profile' },
  philosophy: { text: 'Philosophy', id: 'philosophy' },
  history: { text: 'History', id: 'history' },
  skills: { text: 'Skills', id: 'skills' },
  contact: { text: 'Contact', id: 'contact' },
}

export const GLOBAL_NAV_DATA: GlobalNavMenuType = Object.fromEntries(
  Object.entries(GLOBAL_TOP_NAV_DATA).map(([key, item]) => [key, { ...item, href: `/#${item.id}` }])
)
