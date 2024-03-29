import React from 'react'

import { StoryFn, Meta } from '@storybook/react'

import {ThemeSwitch as StoryComponent} from '.'

export default {
  title: 'Forms/Molecules/ThemeSwitch',
  component: StoryComponent,
  argTypes: {
    defaultChecked: {
      control: 'boolean',
    },
    checked: {
      control: 'boolean',
    },
  },
} as Meta<typeof StoryComponent>

const Template: StoryFn<typeof StoryComponent> = (
  args: React.ComponentProps<typeof StoryComponent>
) => (
  <StoryComponent {...args}></StoryComponent>
)

export const Default = Template.bind({})
Default.args = {
  defaultChecked: false,
  onChange: () => {}
}
