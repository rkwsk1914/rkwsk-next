import React from 'react'

import { StoryFn, Meta } from '@storybook/react'

import { ScrollWrap } from '@/components/parts/ScrollWrap'

import { HelloSection as StoryComponent } from '.'


export default {
  title: 'Page/TopPage/HelloSection',
  component: StoryComponent,
} as Meta<typeof StoryComponent>

const Template: StoryFn<typeof StoryComponent> = (
  args?: React.ComponentProps<typeof StoryComponent>
) => (
  <ScrollWrap>
    <StoryComponent {...args}></StoryComponent>
  </ScrollWrap>
)

export const Default = Template.bind({})
Default.args = {}
