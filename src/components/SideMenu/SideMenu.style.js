import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 4000;
`

export const Background = styled.div`
  background-color: #000000;
  height: 100vh;
  left: 0;
  opacity:0.2;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 4001;
`

export const Menu = styled.div`
  background-color: #FFFFFF;
  box-sizing: border-box;
  height: 100vh;
  left: 0;
  max-width: 360px;
  padding: 25px;
  position: absolute;
  overflow-y: scroll;
  top: 0;
  width: 100%;
  z-index: 4002;

  &::-webkit-scrollbar {
    display: none;
  };
`

export const Close = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
  width: 100%;
`

export const CloseIcon = styled.div`
  cursor: pointer;
  width: fit-content;
`

export const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Item = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  margin: 7px 0px;
  width: 100%;

  &:first-of-type {
    margin-top: 0;
  };

  &:last-of-type {
    margin-bottom: 0;
  };
`

export const ItemIcon = styled.div`
  display: flex;
  width: 22px;
`

export const ItemText = styled.div`
  display: flex;
  margin-left: 15px;
  width: 100%;
`

export const MenuButtons = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  width: 100%;
`

export const Button = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  margin: 7px 0px;
  width: 100%;

  &:first-of-type {
    margin-top: 0;
  };

  &:last-of-type {
    margin-bottom: 0;
  };
`

export const ButtonWrapper = styled.div`
  width: 128px;
`

export const Terms = styled.div`
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
  bottom: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
`