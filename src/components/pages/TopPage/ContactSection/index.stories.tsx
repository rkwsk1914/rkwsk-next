import React from 'react'

import { StoryFn, Meta } from '@storybook/react'

import { SKILL_SET_DATA } from '@/const/page/SkillSetData'

import { ContactSection as StoryComponent } from '.'

export default {
  title: 'Page/TopPage/ContactSection',
  component: StoryComponent,
} as Meta<typeof StoryComponent>

const Template: StoryFn<typeof StoryComponent> = (
  args: React.ComponentProps<typeof StoryComponent>
) => (
  <StoryComponent {...args}></StoryComponent>
)

export const Default = Template.bind({})
Default.args = {
  data: SKILL_SET_DATA
}
