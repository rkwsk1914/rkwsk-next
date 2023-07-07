import React from 'react'

import { StoryFn, Meta } from '@storybook/react'

import { HistoryListYearItem as StoryComponent } from '.'

export default {
  title: 'Molecules/HistoryListYearItem',
  component: StoryComponent,
  argTypes: {
    rightOrLeft: {
      control: 'select', options: ['right', 'left'],
    },
  }
} as Meta<typeof StoryComponent>

const Template: StoryFn<typeof StoryComponent> = (
  args: React.ComponentProps<typeof StoryComponent>
) => (
  <StoryComponent {...args}></StoryComponent>
)

export const Default = Template.bind({})
Default.args = {
  rightOrLeft: 'right',
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
