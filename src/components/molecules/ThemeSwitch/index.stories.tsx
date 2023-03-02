import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import {ThemeSwitch as StoryComponent} from '.'

export default {
  title: 'Molecules/ThemeSwitch',
  component: StoryComponent,
  argTypes: {
    defaultChecked: {
      control: 'boolean',
    },
    checked: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof StoryComponent>

const Template: ComponentStory<typeof StoryComponent> = (
  args: React.ComponentProps<typeof StoryComponent>
) => (
  <StoryComponent {...args}></StoryComponent>
)

export const Default = Template.bind({})
Default.args = {
  defaultChecked: false,
  onChange: () => {}
}
