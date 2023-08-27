export type MenuDataType = {
  text: string
  id: string,
  href?: string
}

export type GlobalNavMenuType = { [key: string]: MenuDataType }
