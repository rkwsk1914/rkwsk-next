import React from 'react'

import { StoryFn, Meta } from '@storybook/react'

import { PageTopShowAlert as StoryComponent } from '.'

export default {
  title: 'Molecules/PageTopShowAlert',
  component: StoryComponent,
  argTypes: {
    isOpen: {
      control: 'boolean',
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
  isOpen: true,
  children: 'テキスト、テキスト、テキスト、テキスト、',
  onClose: () => {console.log('close')},
  type: 'success',
  variant: 'filled'
}
