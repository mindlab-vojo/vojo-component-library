import styled from 'styled-components'

export const Wrapper = styled.div`
  align-items: center;
  background-color: ${props => props.theme.colors.whiteColor};
  box-shadow: 0 3px 5px ${props => props.theme.colors.greyColor};
  display: flex;
  height: 60px;
  justify-content: center;
  width: 100%;

  @media only screen and (min-width: ${props => props.theme.breakpoints.desktop}){
    
  }
`

export const Content = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  max-width: ${props => props.theme.breakpoints.desktopContentSize};
  width: 100%;
`