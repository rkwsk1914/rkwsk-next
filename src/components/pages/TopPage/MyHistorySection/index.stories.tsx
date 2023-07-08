import React from 'react'

import { StoryFn, Meta } from '@storybook/react'

import HISTORY_DATA from '@/const/page/HistoryData'

import { MyHistorySection as StoryComponent } from '.'

export default {
  title: 'Page/TopPage/MyHistorySection',
  component: StoryComponent,
} as Meta<typeof StoryComponent>

const Template: StoryFn<typeof StoryComponent> = (
  args: React.ComponentProps<typeof StoryComponent>
) => (
  <StoryComponent {...args}></StoryComponent>
)

export const Default = Template.bind({})
Default.args = {
  data: HISTORY_DATA
}
