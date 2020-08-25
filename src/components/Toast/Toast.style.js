import styled from 'styled-components'

const backgroundColor = (theme, type) => {
  const textTypes = {
    error: theme.colors.superLightRedColor,
    warn: theme.colors.warnColor
  }
  return textTypes[type]
}

const borderColor = (theme, type) => {
  const textTypes = {
    error: theme.colors.redColor,
    warn: theme.colors.darkWarnColor
  }
  return textTypes[type]
}

export const Wrapper = styled.div`
  background: ${props => backgroundColor(props.theme, props.type)};
  border: 1px solid ${props => borderColor(props.theme, props.type)};
  box-sizing: border-box;
  border-radius: 6px;
  padding: 15px
`

export const Content = styled.div``

export const Title = styled.div``

export const Description = styled.div``
