import React from 'react'

import { StoryFn, Meta } from '@storybook/react'

import { ICON_DATA } from '@/const/IconDate'

import { SkillSetTableItem as StoryComponent } from '.'

export default {
  title: 'Molecules/SkillSetTableItem',
  component: StoryComponent,
} as Meta<typeof StoryComponent>

const Template: StoryFn<typeof StoryComponent> = (
  args: React.ComponentProps<typeof StoryComponent>
) => (
  <StoryComponent {...args}></StoryComponent>
)

export const Default = Template.bind({})
Default.args = {
  skillName: <>
    {ICON_DATA.react}
  </>,
  value: 5,
  acquisitionDate: "2019-05-05"
}

export const NoDate = Template.bind({})
NoDate.args = {
  skillName: <>
    {ICON_DATA.html5}
  </>,
  value: 5
}

export const MissDate = Template.bind({})
MissDate.args = {
  skillName: <>
    {ICON_DATA.html5}
  </>,
  value: 5,
  acquisitionDate: "aaa"
}