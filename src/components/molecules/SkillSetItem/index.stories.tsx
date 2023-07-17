import React from 'react'

import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { StoryFn, Meta } from '@storybook/react'


import { SkillSetItem as StoryComponent } from '.'

export default {
  title: 'Molecules/SkillSetItem',
  component: StoryComponent,
} as Meta<typeof StoryComponent>

const Template: StoryFn<typeof StoryComponent> = (
  args: React.ComponentProps<typeof StoryComponent>
) => (
  <StoryComponent {...args}></StoryComponent>
)

export const Default = Template.bind({})
Default.args = {
  children: <>
    <FontAwesomeIcon icon={faReact} />
  </>,
  value: 5,
  acquisitionDate: "2019-05-05"
}

export const NoDate = Template.bind({})
NoDate.args = {
  children: <>
    <FontAwesomeIcon icon={faCoffee} />
  </>,
  value: 5
}

export const MissDate = Template.bind({})
MissDate.args = {
  children: <>
    <FontAwesomeIcon icon={faCoffee} />
  </>,
  value: 5,
  acquisitionDate: "aaa"
}