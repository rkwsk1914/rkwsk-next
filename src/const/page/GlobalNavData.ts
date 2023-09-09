import { GlobalNavMenuType } from '@/types/MenuDataType'

export const GLOBAL_TOP_NAV_DATA: GlobalNavMenuType = {
  profile: { text: 'Profile', id: 'profile' },
  skills: { text: 'Skills', id: 'skills' },
  history: { text: 'History', id: 'history' },
  // works: { text: 'Works', id: 'works' },
  contact: { text: 'Contact', id: 'contact' },
}

export const GLOBAL_NAV_DATA: GlobalNavMenuType = {
  profile: { text: 'Profile', id: 'profile', href: '/#profile' },
  skills: { text: 'Skills', id: 'skills', href: '/#skills' },
  history: { text: 'History', id: 'history', href: '/#history' },
  // works: { text: 'Works', id: 'works', href: '/#works' },
  contact: { text: 'Contact', id: 'contact', href: '/#contact' },
}
