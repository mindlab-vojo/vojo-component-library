import styled from 'styled-components'

export const Wrapper = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid ${props => props.theme.colors.lightBorderColor};
  border-radius: 6px;
  padding: 6px;
  width: 100%;
  list-style: none;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
`

export const ActiveTab = styled.li`
  background-color: ${props => props.theme.colors.lightPurpleColor};
  color: ${props => props.theme.colors.primaryColor};
  padding: 15px 20px;
  flex: 1 0 0;
`

export const InactiveTab = styled.li`
  color: ${props => props.theme.colors.textMutedColor};
  flex: 1 0 0;
`