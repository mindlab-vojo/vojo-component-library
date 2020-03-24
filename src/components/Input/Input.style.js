import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Label = styled.label`
`

export const Input = styled.input`
  border: 0;
  border-bottom: 2px solid ${props => props.isValid ? props.theme.colors.blackColor : props.theme.colors.redColor};
  color: ${props => props.isValid ? props.theme.colors.blackColor : props.theme.colors.redColor};
  font-size: 18px;
  margin: 5px 0;

  :focus {
    outline: 0;
  }
`