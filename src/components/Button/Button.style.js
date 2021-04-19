import styled from 'styled-components'

export const Button = styled.button`
  align-items: center;
  background-color: ${props => props.backgroundColor};
  border: 1px solid ${props => props.borderColor ? props.borderColor : props.backgroundColor};
  color: ${props => props.textColor};
  cursor: pointer;
  border-radius: ${props => props.retangular ? '4px' : '500px'};
  display: flex;
  justify-content: center;
  font-size: 15px;
  font-weight: 400;
  padding: ${props => props.padding};
  transition-duration: 0.3s;
  width: 100%;
  font-family: 'Rubik', sans-serif;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  letter-spacing:  ${props => props.letterSpacing};
  :hover{
    background-color: ${props => props.hoverColor};
    border-color: ${props => props.hoverColor};
  }

  :focus{
    outline: none;
  }
`