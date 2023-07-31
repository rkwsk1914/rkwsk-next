import React from 'react'

import { StoryFn, Meta } from '@storybook/react'

import { HistoryList as StoryComponent } from '.'

export default {
  title: 'Organisms/HistoryList',
  component: StoryComponent,
} as Meta<typeof StoryComponent>

const Template: StoryFn<typeof StoryComponent> = (
  args: React.ComponentProps<typeof StoryComponent>
) => (
  <StoryComponent {...args}></StoryComponent>
)

export const Default = Template.bind({})
Default.args = {
  data: [
    {
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
    },
    {
      year: 2020,
      monthlyDate: [
        {
          month: 7,
          content: <>
            text text text text text text text text text text <br />
            text text text text text text text text text text
          </>
        },
        {
          month: 11,
          content: <>
            text text text text text text text text text text <br />
            text text text text text text text text text text
          </>
        }
      ]
    },
    {
      year: 2020,
      monthlyDate: [
        {
          content: <>
            text text text text text text text text text text <br />
            text text text text text text text text text text
          </>
        }
      ]
    },
  ]
}
