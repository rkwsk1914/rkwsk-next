import React from 'react'

import { StoryFn, Meta } from '@storybook/react'

import { MyFooter as StoryComponent } from '.'

export default {
  title: 'Layouts/MyFooter',
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
