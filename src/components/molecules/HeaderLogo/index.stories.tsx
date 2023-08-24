import React from 'react'

import { StoryFn, Meta } from '@storybook/react'

import { HeaderLogo as StoryComponent } from '.'

export default {
  title: 'Molecules/HeaderLogo',
  component: StoryComponent,
} as Meta<typeof StoryComponent>

const Template: StoryFn<typeof StoryComponent> = (
  args?: React.ComponentProps<typeof StoryComponent>
) => (
  <div style={{ width: '100%', height: '1000vh' }}>
    <StoryComponent {...args}></StoryComponent>
  </div>
)

export const Default = Template.bind({})
Default.args = {}
