import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Title = styled.div`
  display: flex;
  margin-bottom: ${props => props.titleMarginBottom}
`