import React from 'react'

import { StoryFn, Meta } from '@storybook/react'

import { MenuButton as StoryComponent } from '.'

export default {
  title: 'Atoms/MenuButton',
  component: StoryComponent,
} as Meta<typeof StoryComponent>

const Template: StoryFn<typeof StoryComponent> = (
  args?: React.ComponentProps<typeof StoryComponent>
) => (
  <StoryComponent {...args}></StoryComponent>
)

export const Default = Template.bind({})
Default.args = {
  isOpen: false,
  callBack: () => {}
}
