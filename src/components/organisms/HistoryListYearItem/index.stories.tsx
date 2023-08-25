import React from 'react'

import { StoryFn, Meta } from '@storybook/react'

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
  <div style={{ marginTop: '100vh', width: '100%', height: '1000vh' }}>
    <StoryComponent {...args}></StoryComponent>
    <div className='end'></div>
  </div>
)

export const Default = Template.bind({})
Default.args = {
  endElementClassName: '.end',
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
  endElementClassName: '.end',
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
