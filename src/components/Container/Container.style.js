import styled from 'styled-components'

export const Container = styled.div`
  justify-content: center;
  display: flex;
  width:100%;

  max-width: ${props => {
    const { maxWidth, theme } = props

    switch (maxWidth) {
    case 'desktop':
      return theme.breakpoints.desktopContentSize

    case 'full':
      return theme.breakpoints.fullContentSize

    case 'mobile':
      return theme.breakpoints.mobileContentSize
    
    default:
      return theme.breakpoints.fullContentSize
    }
  }};
`