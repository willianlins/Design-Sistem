import { Box, Button, Toast, ToastProps } from '@ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Alert/Toast',
  component: Toast,
  tags: ['autodocs'],
  args: {
    open: false,
  },
  // decorators: [
  //   (Story) => {
  //     return (
  //       <Box>
  //         <Button size="sm">Show Toast</Button>
  //       </Box>
  //     )
  //   },
  // ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
