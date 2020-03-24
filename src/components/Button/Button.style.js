import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${props => props.theme.colors.secondaryColor};
  border: 1px solid ${props => props.theme.colors.secondaryColor};
  color: 1px solid ${props => props.theme.colors.blackColor};
  cursor: pointer;
  border-radius: 10px;
  height: 40px;
  font-size: 15px;
  font-weight: 600;
  transition-duration: 0.3s;
  width: 100%;

  :hover{
    background-color: ${props => props.theme.colors.darkerSecondaryColor};
  }
`