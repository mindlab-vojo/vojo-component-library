import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`

export const Label = styled.label`
  background-color: ${props => props.theme.colors.whiteColor};
  display: ${props => props.hasLabel ? 'block' : 'none'};
  left: 10px;
  padding: 0 2px;
  position: absolute;
  transition-duration: 1s;
  top: -10px;
`

export const InputBackground = styled.div`
  align-items: center;
  border: 1px solid ${props => 
    props.isValid ? 
      props.isFocused ? 
        props.theme.colors.primaryColor : 
        '#4D4771':
      props.theme.colors.pinkColor
};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  padding: 12px;
`

export const InputIcon = styled.div`
  cursor: pointer;
  margin: 0 5px;
  :first-child{
    margin-left: 0
  }

  :last-child{
    margin-right: 0
  }
`

export const Input = styled.input`
  border: 0;
  color: ${props => props.isValid ? '#4D4771' : props.theme.colors.pinkColor};
  width: 100%;
  font-family: 'Rubik', sans-serif;
  font-size: 16px;
  letter-spacing: 0.25px;
  font-weight: 400;
  :focus {
    outline: 0;
  }
  ::placeholder {
    color: ${props => props.theme.colors.lightGreyColor};
  }
  
  :-ms-input-placeholder {
   color: ${props => props.theme.colors.lightGreyColor};
  }
  
  ::-ms-input-placeholder {
   color: ${props => props.theme.colors.lightGreyColor};
  }
`