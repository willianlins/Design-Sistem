import { X } from 'phosphor-react'
import {
  ActionButton,
  Description,
  RootContainer,
  RootContent,
  Title,
  ViewPort,
} from './styles'
import { ComponentProps, useRef, useState } from 'react'

export interface ToastProps extends ComponentProps<typeof RootContent> {}

export function Toast(props: ToastProps) {
  const [open, setOpen] = useState(false)
  const eventDateRef = useRef(new Date())
  const timerRef = useRef(0)

  function oneWeekAway() {
    const now = new Date()
    const inOneWeek = now.setDate(now.getDate() + 7)
    return new Date(inOneWeek)
  }

  return (
    <>
      <button
        className="Button large violet"
        onClick={() => {
          setOpen(false)
          window.clearTimeout(timerRef.current)
          timerRef.current = window.setTimeout(() => {
            eventDateRef.current = oneWeekAway()
            setOpen(true)
          }, 100)
        }}
      >
        Add to calendar
      </button>
      <RootContainer swipeDirection="right">
        <RootContent open={open} onOpenChange={setOpen}>
          <Title>Title: Toast</Title>
          <Description>Description Toast</Description>
          <ActionButton asChild altText="Close">
            <button>
              <X />
            </button>
          </ActionButton>
          <ViewPort />
        </RootContent>
      </RootContainer>
    </>
  )
}

Toast.displayName = 'Toast'
