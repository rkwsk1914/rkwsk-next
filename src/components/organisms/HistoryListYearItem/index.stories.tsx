import React from 'react'

import { StoryFn, Meta } from '@storybook/react'

import { ScrollWrap, SAMPLE_END_ELEMENT_CLASS_NAME } from '@/components/parts/ScrollWrap'

import { HistoryListYearItem as StoryComponent } from '.'

export default {
  title: 'Organisms/HistoryListYearItem',
  component: StoryComponent,
  argTypes: {
    yearPos: {
      control: 'select', options: ['right', 'left'],
    },
    isLastItem: {
      control: 'boolean',
    },
  }
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
  yearPos: 'right',
  year: 1996,
  monthlyDate: [
    {
      month: 7,
      content: <>
        text text text text text text text text text text <br />
        text text text text text text text text text text
      </>
    },
    {
      month: 8,
      content: <>
        text text text text text text text text text text <br />
        text text text text text text text text text text
      </>
    }
  ]
}

export const withoutMonth = Template.bind({})
withoutMonth.args = {
  endElementClassName: SAMPLE_END_ELEMENT_CLASS_NAME,
  yearPos: 'right',
  year: 1996,
  monthlyDate: [
    {
      content: <>
        text text text text text text text text text text <br />
        text text text text text text text text text text
      </>
    },
    {
      content: <>
        text text text text text text text text text text <br />
        text text text text text text text text text text
      </>
    }
  ]
}
