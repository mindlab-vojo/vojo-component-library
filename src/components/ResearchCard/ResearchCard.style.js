import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: ${props => props.backgroundCard};
  padding: 16px 24px;
  gap: 16px;
`

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  min-width: 30px;
  min-height: 30px;
  border-radius: 100vw;
  background-color: ${props => props.iconBackgroundColor};
  align-self: flex-start;
  margin-top: 2px;
`

export const TextContainer = styled.div`
    width: 85%;
    line-height: ${props => props.lineHeight};
`

export const Button = styled.div`
    color: #391DDD;
    font-weight: bold;
`

export const Title = styled.div`
  font-weight: bold;
`

export const Description = styled.div`
  color: #666666;
`