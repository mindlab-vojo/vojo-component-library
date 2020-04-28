import styled from 'styled-components'

export const Normalizer = styled.div`
  display: block;
  width: 100%;
  z-index: 1000;
`

export const Wrapper = styled.div`
  align-items: center;
  background-color: ${props => props.theme.colors.whiteColor};
  border: 1px solid ${props => props.theme.colors.lightGreyColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  padding: 14px 0;
  width: 100%;
`

export const Content = styled.div`
  margin-left: 15px;
  width: 100%;
`
export const Close = styled.div`
  margin-right: 15px;
  width: 24px;
`