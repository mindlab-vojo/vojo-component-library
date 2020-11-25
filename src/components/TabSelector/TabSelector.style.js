import styled from 'styled-components'

export const Wrapper = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid ${props => props.theme.colors.lightBorderColor};
  border-radius: 6px;
  padding: 10px 20px;
  width: 100%;
`