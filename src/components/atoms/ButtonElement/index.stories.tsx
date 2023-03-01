import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from '@/components/layouts/Theme'

import { ButtonElement as StoryComponent } from '.'

export default {
  title: 'Atoms/ButtonElement',
  component: StoryComponent,
  argTypes: {
    isDark: {
      control: 'boolean',
    },
    color: {
      control: 'select', options: ['inherit','primary','secondary','success','error','info','warning'],
    },
    variant:{
      control: 'select', options: ['contained', 'outlined', 'text'],
    },
    size: {
      control: 'select', options: ['small', 'medium', 'large']
    },
    disabled: {
      control: 'boolean',
    },
  },
  decorators: [
    (Story, storyComponent) => {
      return (
        <Theme isDark={storyComponent.args.isDark}>
          <Story />
        </Theme>
      )
    },
  ],
} as ComponentMeta<typeof StoryComponent>

const Template: ComponentStory<typeof StoryComponent> = (
  args?: React.ComponentProps<typeof StoryComponent>
) => (
  <StoryComponent {...args}></StoryComponent>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Sample',
  color: 'primary',
  variant: 'contained',
  size: 'large',
  disabled: false
}
