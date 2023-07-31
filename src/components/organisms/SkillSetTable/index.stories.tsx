import React from 'react'

import { StoryFn, Meta } from '@storybook/react'

import { FRONT_END_SKILL_SET_DATA } from '@/const/page/SkillSetData'

import { SkillSetTable as StoryComponent } from '.'


export default {
  title: 'Organisms/SkillSetTable',
  component: StoryComponent,
} as Meta<typeof StoryComponent>

const Template: StoryFn<typeof StoryComponent> = (
  args: React.ComponentProps<typeof StoryComponent>
) => (
  <StoryComponent {...args}></StoryComponent>
)

export const Default = Template.bind({})
Default.args = {
  data: FRONT_END_SKILL_SET_DATA
}
