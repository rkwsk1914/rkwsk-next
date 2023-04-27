import React from 'react'

import { StoryFn, Meta } from '@storybook/react'

import { HamburgerMenu as StoryComponent } from '.'

export default {
  title: 'Organisms/HamburgerMenu',
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
    { text: 'menu 1', href: '/' },
    { text: 'menu 2', href: '/' },
    { text: 'menu 3', href: '/' },
    { text: 'menu 4', href: '/' },
  ],
}