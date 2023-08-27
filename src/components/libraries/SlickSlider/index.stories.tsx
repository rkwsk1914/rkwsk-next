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

const settings = {
  infinite:true,
  speed: 300,
  slidesToShow:1,
  centerPadding: '150px',
  autoplay: false,
  arrows: true,
  dots: true,
  centerMode: true,
  useCSS: true,
  responsive: [
    {
      breakpoint: 750, // min-width 749
      settings: {
        infinite:true,
        speed: 300,
        slidesToShow:1,
        centerPadding: '0px',
        autoplay: false,
        arrows: true,
        dots: true,
        centerMode: true,
        useCSS: true
      }
    },
    {
      breakpoint: 960, // min-width 960
      settings: {
        infinite:true,
        speed: 300,
        slidesToShow:1,
        centerPadding: '0px',
        autoplay: false,
        arrows: true,
        dots: true,
        centerMode: true,
        useCSS: true
      }
    }
  ]
}

export const Default = Template.bind({})
Default.args = {
  settings: settings,
  children:
    SKILL_SET_DATA.map((item, index) => (
      <div key={index}>
        <MyCard title={item.title}  >
          <SkillSetTable data={item.data} />
        </MyCard>
      </div>
    ))
}
