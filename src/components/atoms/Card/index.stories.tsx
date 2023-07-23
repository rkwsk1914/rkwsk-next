import React from 'react'

import { StoryFn, Meta } from '@storybook/react'

import { FRONT_END_SKILL_SET_DATA, WORKING_SKILL_SET_DATA } from '@/const/page/SkillSetData'

import { SkillSetTable } from '@/components/organisms/SkillSetTable'

import { Card as StoryComponent } from '.'


export default {
  title: 'Atoms/Card',
  component: StoryComponent,
} as Meta<typeof StoryComponent>

const Template: StoryFn<typeof StoryComponent> = (
  args: React.ComponentProps<typeof StoryComponent>
) => (
  <StoryComponent {...args}></StoryComponent>
)

export const Default = Template.bind({})
Default.args = {
  title: "FRONT END SKILL",
  children: <SkillSetTable data={FRONT_END_SKILL_SET_DATA} />
}

export const NoTitle = Template.bind({})
NoTitle.args = {
  children: <SkillSetTable data={FRONT_END_SKILL_SET_DATA} />
}

export const MatchHeight = Template.bind({})
MatchHeight.args = {
  children: <SkillSetTable data={WORKING_SKILL_SET_DATA} />,
  matchHeight: 700
}
