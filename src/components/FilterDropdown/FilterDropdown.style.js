import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: fit-content;
`

export const Input = styled.div`
${props => props.isSelected 
    ? `
    background-color: ${props.theme.colors.blackColor};
    ` : `
    background-color: ${props.theme.colors.whiteColor};
    `
}
  align-items: center;
  box-sizing:border-box;
  cursor: pointer;
  border: 2px solid ${props => props.theme.colors.blackColor};
  border-radius: 10px;
  display: flex;
  padding: 5px 12px;
  width: 100%;
`

export const Text = styled.div``

export const Icon = styled.div`
  margin-left: 5px;
  margin-top: 7px;
`
export const Dropdown = styled.div`
  background-color: ${props => props.theme.colors.blackColor};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-top: -10px;
  overflow: hidden;
  position: absolute;
  top: 54px;
  width: 100%;
`
export const Item = styled.div`
  background-color: ${props => props.theme.colors.blackColor};
  cursor: pointer;
  padding: 8px 14px;
  width: 100%;

  &:hover {
    background-color: ${props => props.theme.colors.darkGreyColor};
  }
`