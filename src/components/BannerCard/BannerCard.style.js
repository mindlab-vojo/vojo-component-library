import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
`
export const Image = styled.div`
  align-items: center;
  background-color: ${props => props.theme.colors.lightYellowColor};
  border-radius: 500px;
  display: flex;
  height: 56.93px;
  justify-content:center;
  width: 56.93px;
`

export const LeftContent = styled.div`
  align-items: center;
  display: flex;
  justify-content:center;
` 

export const RightContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content:center;
  margin-left: 9px;
` 

export const Title = styled.div`
  width: 100%;
` 

export const Description = styled.div`
  margin-bottom: 5px;
  width: 100%;
`
