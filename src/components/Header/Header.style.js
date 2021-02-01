import styled from 'styled-components'

export const Wrapper = styled.header`
  align-items: center;
  box-sizing: border-box;
  background-color: ${props => props.theme.colors.primaryColor};
  box-shadow: 0 3px 5px ${props => props.theme.colors.greyColor};
  display: flex;
  height: 48px;
  justify-content: center;
  width: 100%;
  padding: 0 20px;
  @media only screen and (min-width: ${props => props.theme.breakpoints.desktop}){
    
  }
`

export const Content = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  max-width: ${props => props.theme.breakpoints.desktopContentSize};
  width: 100%;
`

export const Block = styled.div`
  min-width: 40px;
  min-height: 40px;
`

export const BlockClickable = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  min-width: 40px;
  min-height: 40px;
`