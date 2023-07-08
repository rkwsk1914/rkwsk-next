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
  children: <>
    text text text text text text text text text text <br />
    text text text text text text text text text text
  </>
}

export const withOutMonth = Template.bind({})
withOutMonth.args = {
  children: <>
    text text text text text text text text text text <br />
    text text text text text text text text text text
  </>,
}
