import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Title = styled.div`
  display: flex;
  margin: ${props => props.titleMargin};
`

export const Description = styled.div`
  display: flex;
`