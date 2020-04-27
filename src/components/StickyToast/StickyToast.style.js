import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.whiteColor};
  border: 1px solid ${props => props.theme.colors.lightGreyColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  padding: 17px 23px;
  width: 100%;
`

export const Content = styled.div`
  width: 100%;
`
export const Close = styled.div`
  width: 24px;
`