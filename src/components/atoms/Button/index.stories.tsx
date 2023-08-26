import React from 'react'

import { StoryFn, Meta } from '@storybook/react'

import { Button as StoryComponent } from '.'

export default {
  title: 'Atoms/Button',
  component: StoryComponent,
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
  onClick: () => { console.log('click') }
}

export const LinkType = Template.bind({})
LinkType.args = {
  children: 'button',
  type: 'standard',
  href: './',
  onClick: () => { console.log('click') }
}

export const ScrollType = Template.bind({})
ScrollType.args = {
  children: 'button',
  type: 'standard',
  toId: 'test',
  onClick: () => { console.log('click') }
}

export const SubmitType = Template.bind({})
SubmitType.args = {
  children: 'button',
  type: 'standard',
  submit: true,
  onClick: () => { console.log('click') }
}