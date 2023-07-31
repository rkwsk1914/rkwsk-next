import React from 'react'

import { StoryFn, Meta } from '@storybook/react'

import { MenuListItem as StoryComponent } from '.'

export default {
  title: 'Atoms/MenuListItem',
  component: StoryComponent,
} as Meta<typeof StoryComponent>

const Template: StoryFn<typeof StoryComponent> = (
  args: React.ComponentProps<typeof StoryComponent>
) => (
  <StoryComponent {...args}></StoryComponent>
)

export const Default = Template.bind({})
Default.args = {
  data: {
    text: 'menu1',
    href: '/'
  }
}
