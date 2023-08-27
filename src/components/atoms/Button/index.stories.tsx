import React from 'react'

import { StoryFn, Meta } from '@storybook/react'

import { Button as StoryComponent } from '.'

import { MuiSizeOptions } from '@/types/MuiSize'

export default {
  title: 'Atoms/Button',
  component: StoryComponent,
  argTypes: {
    size: {
      control: 'select', options: MuiSizeOptions
    },
    onClick: { action: 'clicked' }
  }
} as Meta<typeof StoryComponent>

const Template: StoryFn<typeof StoryComponent> = (
  args: React.ComponentProps<typeof StoryComponent>
) => (
  <StoryComponent {...args}></StoryComponent>
)

export const Default = Template.bind({})
Default.args = {
  children: 'button',
  type: 'standard',
  disabled: false,
}

export const LinkType = Template.bind({})
LinkType.args = {
  children: 'button',
  type: 'standard',
  href: './',
  disabled: false,
}

export const ScrollType = Template.bind({})
ScrollType.args = {
  children: 'button',
  type: 'standard',
  toId: 'test',
  disabled: false,
}

export const SubmitType = Template.bind({})
SubmitType.args = {
  children: 'button',
  type: 'standard',
  submit: true,
  disabled: false,
}