import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.div`
  display: flex;
`

export const Tooltip = styled.div`
  cursor: pointer;
  display: flex;
`

export const Description = styled.div`
  display: flex;
`

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Option = styled.div`
  display: flex;
  margin: 5px 0;

  &:first-of-type { 
    margin-top: 12px;
  }
`

export const HiddenRadio = styled.input`
  display: none;
`

export const RadioIcon = styled.div`
  margin-right: 5px;
`

export const Label = styled.label`
  cursor: pointer;
  display: flex;
`