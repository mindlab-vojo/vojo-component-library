import styled from 'styled-components'

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
`

export const IconWrapper = styled.div`
  margin: 0 15px 0 10px;
`

export const IconCircle = styled.div`
  align-items: center;
  background-color: ${props => props.backgroundColor};
  border-radius: 120px;
  display: flex;
  height: ${props => props.iconCircleSize};
  justify-content: center;
  width: ${props => props.iconCircleSize};
`

export const InfoWrapper = styled.div`
  line-height: ${props => props.lineHeight};
`

export const Title = styled.div`
  margin-bottom: 5px
`

export const Description = styled.div``

export const Time = styled.div``