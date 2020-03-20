import styled from 'styled-components';

export const Wrapper = styled.footer`
  background-color: ${props => props.theme.colors.primaryColor};
  align-items: center;
  bottom: 0;
  display: flex;
  height: 60px;
  justify-content: center;
  position: fixed;
  width: 100%;
`
export const Content = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  max-width: 960px;
  width: 100%;
`

export const ContentBlock = styled.div`
  align-items: center;
  display: flex;
  justify-content:center;

  .Logo {
    margin-left: 10px;
  }
`