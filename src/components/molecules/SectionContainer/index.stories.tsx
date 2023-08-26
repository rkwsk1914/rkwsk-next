import React from 'react'

import { StoryFn, Meta } from '@storybook/react'

import { SectionContainer } from '@/components/molecules/SectionContainer'

import { SectionContainer as StoryComponent } from '.'


export default {
  title: 'Molecules/SectionContainer',
  component: StoryComponent,
} as Meta<typeof StoryComponent>

const Template: StoryFn<typeof StoryComponent> = (
  args?: React.ComponentProps<typeof StoryComponent>
) => (
  <StoryComponent {...args}></StoryComponent>
)

type LevelType = 1 | 2 | 3 | 4 | 5 | 6

type SampleDataArgs = {
  level: LevelType
  isTitle?: boolean
  isFull?: boolean
  hasContent?: boolean
  stopFullLevel?: LevelType
  recursive?: boolean
}

const setSampleData = (args: SampleDataArgs) => {
  const {
    level = 2,
    isTitle = true,
    isFull = false,
    hasContent = true,
    stopFullLevel,
    recursive = false,
  } = args

  const setInnerLevel = (level: LevelType):LevelType => {
    switch (level) {
      case 1:
        return 2
      case 2:
        return 3
      case 3:
        return 4
      case 4:
        return 5
      case 5:
        return 6
      case 6:
      default:
        return 6
    }
  }

  const innerLevel = setInnerLevel(level)

  const innerArgs: SampleDataArgs = {
    level: innerLevel,
    isTitle: isTitle,
    isFull: stopFullLevel ? (stopFullLevel === innerLevel) ? false : true : isFull,
    hasContent: hasContent,
    stopFullLevel: stopFullLevel,
    recursive: recursive,
  }

  const children = hasContent ? (
    <>
      <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text </p>
      <p>text text text text text text <br />text text text text text text text text text text text text text text text text text text text text text text text text text text text </p>
      {level === 6 ? null : recursive && <SectionContainer {...setSampleData(innerArgs)} />}
    </>
  ) : (
    <>
      {level === 6 ? null : recursive && <SectionContainer {...setSampleData(innerArgs)} />}
    </>
  )

  return {
    children: children,
    title: isTitle ? `title${level}` : null,
    isFull: isFull,
    level: level
  }
}

export const Default = Template.bind({})
Default.args = {
  ...setSampleData({ level: 1 })
}

export const Inner = Template.bind({})
Inner.args = {
  ...setSampleData({ level: 1, recursive: true })
}

export const InnerWithoutTitle = Template.bind({})
InnerWithoutTitle.args = {
  ...setSampleData({ level: 1, isTitle: false, recursive: true })
}

export const InnerOnlyTitle = Template.bind({})
InnerOnlyTitle.args = {
  ...setSampleData({ level: 1, hasContent: false, recursive: true })
}

export const InnerLevel3 = Template.bind({})
InnerLevel3.args = {
  ...setSampleData({ level: 3, recursive: true })
}

export const InnerWithoutTitleLevel3 = Template.bind({})
InnerWithoutTitleLevel3.args = {
  ...setSampleData({ level: 3, isTitle: false, recursive: true })
}

export const WidthFull = Template.bind({})
WidthFull.args = {
  ...setSampleData({ level: 1, isFull: true, recursive: true})
}

export const WidthFullHasNoFull = Template.bind({})
WidthFullHasNoFull.args = {
  ...setSampleData({ level: 1, isFull: true, stopFullLevel: 3, recursive: true})
}
