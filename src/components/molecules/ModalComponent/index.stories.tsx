import React from 'react'

import { StoryFn, Meta } from '@storybook/react'

import { ModalComponent as StoryComponent } from '.'

export default {
  title: 'Molecules/ModalComponent',
  component: StoryComponent,
} as Meta<typeof StoryComponent>

const Template: StoryFn<typeof StoryComponent> = (
  args: React.ComponentProps<typeof StoryComponent>
) => (
  <StoryComponent {...args}></StoryComponent>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Sample',
  buttonText: 'Modal Open',
}
