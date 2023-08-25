import React from 'react'

import { StoryFn, Meta } from '@storybook/react'

import { ScrollWrap, SAMPLE_END_ELEMENT_CLASS_NAME } from '@/components/parts/ScrollWrap'

import { HistoryListMonthItem as StoryComponent } from '.'

export default {
  title: 'Molecules/HistoryListMonthItem',
  component: StoryComponent,
} as Meta<typeof StoryComponent>

const Template: StoryFn<typeof StoryComponent> = (
  args: React.ComponentProps<typeof StoryComponent>
) => (
  <ScrollWrap>
    <StoryComponent {...args}></StoryComponent>
  </ScrollWrap>
)

export const Default = Template.bind({})
Default.args = {
  endElementClassName: SAMPLE_END_ELEMENT_CLASS_NAME,
  month: 7,
  children: <>
    text text text text text text text text text text <br />
    text text text text text text text text text text
  </>
}

export const withoutMonth = Template.bind({})
withoutMonth.args = {
  endElementClassName: SAMPLE_END_ELEMENT_CLASS_NAME,
  children: <>
    text text text text text text text text text text <br />
    text text text text text text text text text text
  </>,
}
