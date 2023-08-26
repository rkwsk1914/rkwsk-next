import React from 'react'

import { StoryFn, Meta } from '@storybook/react'

import { AlertElement as StoryComponent } from '.'

export default {
  title: 'Atoms/AlertElement',
  component: StoryComponent,
} as Meta<typeof StoryComponent>

const Template: StoryFn<typeof StoryComponent> = (
  args: React.ComponentProps<typeof StoryComponent>
) => (
  <StoryComponent {...args}></StoryComponent>
)

export const Default = Template.bind({})
Default.args = {
  children: 'テキスト、テキスト、テキスト、テキスト、',
  onClose: () => {console.log('close')},
  type: 'success',
  variant: 'filled'
}
