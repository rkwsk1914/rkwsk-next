import React from 'react'

import { StoryFn, Meta } from '@storybook/react'

import { HistoryListMonthItem as StoryComponent } from '.'

export default {
  title: 'Atoms/HistoryListMonthItem',
  component: StoryComponent,
} as Meta<typeof StoryComponent>

const Template: StoryFn<typeof StoryComponent> = (
  args: React.ComponentProps<typeof StoryComponent>
) => (
  <StoryComponent {...args}></StoryComponent>
)

export const Default = Template.bind({})
Default.args = {
  month: 7,
  children: 'Sample',
}
