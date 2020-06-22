import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  width:100%;

  ${props => {
    const { maxWidth, theme } = props

    switch (maxWidth) {
    case 'desktop':
      return (
        `
        max-width: ${theme.breakpoints.desktopContentSize};
        padding: 0 20px;
        `
      )

    case 'full':
      return `max-width: ${theme.breakpoints.fullContentSize};`

    case 'mobile':
      return `max-width: ${theme.breakpoints.mobileContentSize};`
    
    default:
      return `max-width: ${theme.breakpoints.fullContentSize};`
    }
  }};
`