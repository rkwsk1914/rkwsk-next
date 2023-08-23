import React from 'react'

import { StoryFn, Meta } from '@storybook/react'

import { SKILL_SET_DATA } from '@/const/page/SkillSetData'

import { MyCard } from '@/components/atoms/MyCard'
import { SkillSetTable } from '@/components/organisms/SkillSetTable'

import { SlickSlider as StoryComponent } from '.'

export default {
  title: 'Libraries/SlickSlider',
  component: StoryComponent,
} as Meta<typeof StoryComponent>

const Template: StoryFn<typeof StoryComponent> = (
  args: React.ComponentProps<typeof StoryComponent>
) => (
  <StoryComponent {...args}></StoryComponent>
)

export const Default = Template.bind({})
Default.args = {
  settings: {
    infinite:true,
    speed: 300,
    slidesToShow:1,
    centerPadding: '150px',
    autoplay: true,
    arrows: true,
    dots: true,
    centerMode: true,
    useCSS: true
  },
  children:
    SKILL_SET_DATA.map((item, index) => (
      <div key={index}>
        <MyCard title={item.title}  >
          <SkillSetTable data={item.data} />
        </MyCard>
      </div>
    ))
}
