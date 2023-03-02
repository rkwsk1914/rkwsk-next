import React from 'react'

import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';

import { action } from "@storybook/addon-actions";
import { ComponentStory, ComponentMeta } from '@storybook/react'

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
} as ComponentMeta<typeof StoryComponent>

const Template: ComponentStory<typeof StoryComponent> = (
  args: React.ComponentProps<typeof StoryComponent>
) => (
  <StoryComponent {...args}></StoryComponent>
)

export const Default = Template.bind({})
Default.args = {
  checked: false,
  onChange: action("")
}

export const Uncontrolled = Template.bind({})
Uncontrolled.args = {
  defaultChecked: false,
  onChange: action("")
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  checked: false,
  onChange: action(""),
  icon: <LightModeIcon />,
  checkedIcon: <NightlightIcon />
}
