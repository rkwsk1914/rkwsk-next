import React from 'react'

import { render } from '@testing-library/react'

import { isScrollLink } from '@/components/atoms/MenuListItem'

describe('scroll Link href test', () => {

  const donTest = (testHref: string, toBe: boolean) => {
    test(testHref, () => {
      expect(isScrollLink(testHref)).toBe(toBe)
    })
  }

  donTest('#menu', true)
  donTest('#menu-1', true)
  donTest('#1-menu', true)
  donTest('menu', false)
  donTest('/menu', false)
  donTest('https://react.dev/', false)
  donTest('https://react.dev/learn/writing-markup-with-jsx#jsx-putting-markup-into-javascript', false)
})

