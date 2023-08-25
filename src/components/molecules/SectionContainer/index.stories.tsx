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

const setSampleData = (
  level: 1 | 2 | 3 | 4 | 5 | 6  = 2,
  children: React.ReactNode = <></>,
  isTitle: boolean = true,
  isFull: boolean = false
) => {
  return {
    children: (
      <>
        <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text </p>
        <p>text text text text text text <br />text text text text text text text text text text text text text text text text text text text text text text text text text text text </p>
        {children}
      </>
    ),
    title: isTitle ? `title${level}` : null,
    isFull: isFull,
    level: level
  }
}

export const Default = Template.bind({})
Default.args = {
  ...setSampleData()
}

export const Inner = Template.bind({})
Inner.args = {
  ...setSampleData(1,
    <SectionContainer
    {...setSampleData(2,
      <SectionContainer
      {...setSampleData(3,
        <SectionContainer
        {...setSampleData(4,
          <SectionContainer
          {...setSampleData(5,
            <SectionContainer
            {...setSampleData(6)} />,
          )} />,
        )}
      />,
      )}
    />,
    )}
  />,
  )
}

export const InnerWithoutTitle = Template.bind({})
InnerWithoutTitle.args = {
  ...setSampleData(1,
    <SectionContainer
    {...setSampleData(2,
      <SectionContainer
      {...setSampleData(3,
        <SectionContainer
        {...setSampleData(4,
          <SectionContainer
          {...setSampleData(5,
            <SectionContainer
            {...setSampleData(6, null, false)} />,
            false
          )} />,
          false
        )}
      />,
      false
      )}
    />,
    false
    )}
  />,
  false
  )
}

export const InnerLevel3 = Template.bind({})
InnerLevel3.args = {
  ...setSampleData(3,
    <SectionContainer
    {...setSampleData(4,
      <SectionContainer
      {...setSampleData(5,
        <SectionContainer
        {...setSampleData(6)} />,
      )} />,
    )}
  />,
  )
}

export const widthFull = Template.bind({})
widthFull.args = {
  ...setSampleData(1,
    <SectionContainer
    {...setSampleData(2,
      <SectionContainer
      {...setSampleData(3,
        <SectionContainer
        {...setSampleData(4,
          <SectionContainer
          {...setSampleData(5,
            <SectionContainer
            {...setSampleData(6)} />,
            true
          )} />,
          true, true
        )}
      />,
      true
      )}
    />,
    true, true
    )}
  />,
  true, true
  )
}