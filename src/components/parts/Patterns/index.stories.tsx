import React from 'react'

import { StoryFn, Meta } from '@storybook/react'

import { Patterns as StoryComponent } from '.'

export default {
  title: 'Parts/Colors/Patterns',
  component: StoryComponent,
} as Meta<typeof StoryComponent>

const Template: StoryFn<typeof StoryComponent> = (
  args?: React.ComponentProps<typeof StoryComponent>
) => (
  <StoryComponent {...args}></StoryComponent>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Sample',
}
