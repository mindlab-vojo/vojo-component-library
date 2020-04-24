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
        props.theme.colors.darkGrayColor:
      props.theme.colors.redColor
};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  padding: 5px 10px 4px;
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
  color: ${props => props.isValid ? props.theme.colors.primaryColor : props.theme.colors.redColor};
  font-size: 16px;
  margin: 5px 0;
  width: 100%;

  :focus {
    outline: 0;
  }
`