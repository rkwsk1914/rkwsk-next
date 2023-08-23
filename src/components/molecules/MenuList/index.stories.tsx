import React from 'react'

import { StoryFn, Meta } from '@storybook/react'

import { MenuList as StoryComponent } from '.'

export default {
  title: 'Molecules/MenuList',
  component: StoryComponent,
} as Meta<typeof StoryComponent>

const Template: StoryFn<typeof StoryComponent> = (
  args: React.ComponentProps<typeof StoryComponent>
) => (
  <StoryComponent {...args}></StoryComponent>
)

export const Default = Template.bind({})
Default.args = {
  data: [
    { text: 'menu 1', id: 'menu1', href: '/' },
    { text: 'menu 2', id: 'menu2', href: '/' },
    { text: 'menu 3', id: 'menu3', href: '/' },
    { text: 'menu 4', id: 'menu4', href: '/' },
  ],
}
