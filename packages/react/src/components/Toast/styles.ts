import { keyframes, styled } from '../../styles'
import * as Toast from '@radix-ui/react-toast'

const hide = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateX(calc(100% + var(--viewport-padding)))',
  },
  to: {
    transform: 'translateX(0)',
  },
})

const swipeOut = keyframes({
  from: {
    transform: 'translateX(var(--radix-toast-swipe-end-x))',
  },
  to: {
    transform: 'translateX(calc(100% + var(--viewport-padding)))',
  },
})

export const RootContainer = styled(Toast.Provider, {})

export const RootContent = styled(Toast.Root, {
  backgroundColo: '$white',
  borderRadius: '6px',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  padding: '15px',
  display: 'grid',
  gridTemplateAreas: 'title action description action',
  gridtemplateColumns: 'auto max-content',
  columnGap: '15px',
  alignItems: 'center',

  '&:[data-state= open]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&:[data-state=closed]': {
    animation: `${hide} 100ms ease-in`,
  },

  '&:[data-swipe=move]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },

  '&:[data-swipe=cancel]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },

  '&:[data-swipe=end]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const Title = styled(Toast.Title, {
  gridArea: 'title',
  marginBottom: '5px',
  fontWeight: 500,
  color: '$ignite300',
  fontSize: '15px',
})

export const Description = styled(Toast.Description, {
  gridArea: 'description',
  margin: 0,
  color: '$ignite300',
  fontSize: '13px',
  lineHeight: 1.3,
})

export const ActionButton = styled(Toast.Action, {
  gridArea: 'action',

  button: {
    all: 'unset',
    fontSize: '12px',
    padding: '0 10px',
    lineHeight: '25px',
    height: '25px',
    background: '$ignite300',
  },
})

export const ViewPort = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: '25px',
  gap: '10px',
  width: '390px',
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})
