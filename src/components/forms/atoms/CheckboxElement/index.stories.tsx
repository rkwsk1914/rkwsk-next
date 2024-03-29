import React from 'react'

import BookmarkIcon from '@mui/icons-material/Bookmark'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import Favorite from '@mui/icons-material/Favorite'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'

import { action } from "@storybook/addon-actions"
import { StoryFn, Meta } from '@storybook/react'

import { CheckboxElement as StoryComponent } from '.'

import { InputAttributeOptions } from '@/types/InputAttribute'


export default {
  title: 'Forms/Atoms/CheckboxElement',
  component: StoryComponent,
  argTypes: {
    disabled: InputAttributeOptions.disabled,
    error: InputAttributeOptions.error,
    required: InputAttributeOptions.required,
  }
} as Meta<typeof StoryComponent>

const Template: StoryFn<typeof StoryComponent> = (
  args: React.ComponentProps<typeof StoryComponent>
) => (
  <StoryComponent {...args}></StoryComponent>
)

export const Default = Template.bind({})
Default.args = {
  checked: false,
  size: "small",
  disabled: false,
  label: 'default',
  onChange: action('onChange'),
  value: ""
}

export const Uncontrolled = Template.bind({})
Uncontrolled.args = {
  defaultChecked: false,
  size: "small",
  disabled: false,
  label: 'default',
  onChange: action('onChange'),
  value: ""
}

export const Bookmark = Template.bind({})
Bookmark.args = {
  defaultChecked: false,
  size: "small",
  disabled: false,
  onChange: action('onChange'),
  value: "",
  icon: <BookmarkBorderIcon />,
  checkedIcon: <BookmarkIcon />
}

export const Favorites = Template.bind({})
Favorites.args = {
  defaultChecked: false,
  size: "small",
  disabled: false,
  onChange: action('onChange'),
  value: "",
  icon: <FavoriteBorder />,
  checkedIcon: <Favorite />
}
