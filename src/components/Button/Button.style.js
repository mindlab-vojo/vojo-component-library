import styled from 'styled-components'

export const Button = styled.button`
  align-items: center;
  background-color: ${props => props.backgroundColor};
  border: 1px solid ${props => props.borderColor ? props.borderColor : props.backgroundColor};
  color: ${props => props.textColor};
  cursor: pointer;
  border-radius: 500px;
  display: flex;
  justify-content: center;
  font-size: 15px;
  font-weight: 600;
  padding: 10px 25px;
  transition-duration: 0.3s;
  width: 100%;

  :hover{
    background-color: ${props => props.hoverColor};
    border-color: ${props => props.hoverColor};
  }

  :focus{
    outline: none;
  }
`