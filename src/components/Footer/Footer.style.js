import styled from 'styled-components';

{/* export const Wrapper = styled.footer`
  background-color: ${props => props.theme.colors.primaryColor};
  align-items: center;
  bottom: 0;
  display: flex;
  height: 120px;
  justify-content: center;
  width: 100%;

@media only screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
  flex-direction: row;
  height: 60px;
}
`
export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 10px;
  max-width: 960px;
  width: 100%;

  @media only screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    flex-direction: row;
  }

`

export const ContentBlock = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content:center;

  p {
    margin : 10px 0;
  }

  .Logo {
    margin-left: 0;
  }
  
  @media only screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    flex-direction: row;

    p {
      margin: 0;
      ::after {
        content: " |"
      }
    }

    .Logo {
      margin-left: 10px;
    }
  }
` */}

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  background-color: ${props => props.theme.colors.primaryColor};
  display: flex;
  justify-content: center;
  bottom: 0;
  color: white;
  padding: 0 20px;
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  max-width: 960px;
  width: 100%;
  min-height: 120px;
  flex-direction: column;
  padding: 20px 0;
  @media only screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    min-height: 60px;
    flex-direction: row;
    align-items: flex-start;
    padding: 0;
  }
`

export const Social = styled.div`
  display: flex;
  justify-conten: space-between;
  align-items: center;
  height: fit-content;
  margin-bottom: 20px;
  @media only screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    height: 60px;
  }
  @media only screen and (max-width: ${props => props.theme.breakpoints.mobileContentSize}) {
    flex-direction: column;
  }
`

export const Center = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  @media only screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    width: 30%;
  }
`

export const Icons = styled.div`
  display: flex;
  img{
    padding: 5px;
    width:30px;
    height:30px;
    cursor: pointer;
  }
`

export const Terms = styled.div`
  text-decoration: underline;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  cursor: pointer;
  @media only screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    height: 60px;
    margin: 0px;
  }
  @media only screen and (max-width: ${props => props.theme.breakpoints.mobileContentSize}) {
    flex-direction: column;
  }
`

export const Use = styled.span`
  margin-right: 4px;
  margin-top: 4px;
  cursor: pointer;
  @media only screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    width: fit-content;
  }
`

export const Privacy = styled.span`
  margin-left: 4px;
  margin-top: 4px;
  @media only screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    width: fit-content;
  }
`

export const Product = styled.div`
  display: flex;
  justify-content: center;
  font-size: 12px;
  margin-bottom: 12px;
  @media only screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    height: 60px;
    margin: 0px;
    width: 100%;
  }
`

export const ProductText = styled.span`
  text-align: center;
`

export const Heart = styled.span`
  margin-left: 4px;
`

export const Mind = styled.span`
  color: #edf000;
  text-decoration: underline;
  margin-left: 3px;
  cursor: pointer;
`

export const Copywriting = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  @media only screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    height: 60px;
    width: 30%;
    margin-top: 0px;
  }
  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
  @media only screen and (max-width: ${props => props.theme.breakpoints.mobileContentSize}) {
    flex-direction: row;
  }
`

export const CopywritingText = styled.span`
  font-size: 12px;
  text-align: right;
  padding-right: 6px;
  @media only screen and (max-width: 500px) {
    text-align: center;
  }
  @media only screen and (max-width: ${props => props.theme.breakpoints.mobileContentSize}) {
    text-align: right;
  }
`

export const Logo = styled.div`
  padding-left: 6px;
  @media only screen and (max-width: 500px) {
    margin-top: 8px;
  }
  @media only screen and (max-width: ${props => props.theme.breakpoints.mobileContentSize}) {
    margin-top: 0px;
  }
`