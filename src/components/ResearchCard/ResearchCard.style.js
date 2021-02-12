import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: ${props => props.backgroundCard};
  padding: 16px 24px;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgb(0 0 0 / 25%);
  border-radius: 6px;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
`

export const IconWrapper = styled.div`
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
  margin-right: 16px
`

export const TextContainer = styled.div`
    width: 85%;
    line-height: ${props => props.lineHeight ? props.lineHeight : '17px' };
    display: flex;
    flex-direction: column;
`

export const Button = styled.div`
    color: #391DDD;
    font-weight: bold;
    cursor: pointer;
    margin-left: 16px;
    font-family: 'Rubik', sans-serif;

`

export const Title = styled.div`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 4px;
`

export const Description = styled.div`
  color: #666666;
  font-family: 'Rubik', sans-serif;
  font-size: 14px;
`