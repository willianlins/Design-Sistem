import { Avatar, AvatarProps } from '@ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Data display/Avatar',
  tags: ['autodocs'],
  component: Avatar,
  args: { src: 'https://github.com/willianlins.png', alt: 'Willian Lins' },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
