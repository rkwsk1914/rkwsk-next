import React from 'react'

import LightModeIcon from '@mui/icons-material/LightMode'
import NightlightIcon from '@mui/icons-material/Nightlight'
import { fn } from 'storybook/test'

import { StoryFn, Meta } from '@storybook/react'

import {SwitchElement as StoryComponent} from '.'

export default {
  title: 'Forms/Atoms/SwitchElement',
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
  checked: false,
  onChange: fn()
}

export const Uncontrolled = Template.bind({})
Uncontrolled.args = {
  defaultChecked: false,
  onChange: fn()
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  checked: false,
  onChange: fn(),
  icon: <LightModeIcon />,
  checkedIcon: <NightlightIcon />
}
