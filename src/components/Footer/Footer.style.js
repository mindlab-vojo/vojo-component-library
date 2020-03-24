import styled from 'styled-components';

export const Wrapper = styled.footer`
  background-color: ${props => props.theme.colors.primaryColor};
  align-items: center;
  bottom: 0;
  display: flex;
  height: 120px;
  justify-content: center;
  position: fixed;
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
`