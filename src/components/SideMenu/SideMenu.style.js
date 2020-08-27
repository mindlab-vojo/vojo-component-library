import styled, { keyframes } from 'styled-components'

const slideIn = keyframes`
  from {
    margin-left: -360px;
  }
  to: {
    margin-left: 0;
  }

`
const slideOut = keyframes`
  from {
    margin-left: 0;
  }
  to: {
    margin-left: -360px;
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to: {
    opacity: 0.3;
  }

`
const fadeOut = keyframes`
  from {
    opacity: 0.3;
  }
  to: {
    opacity: 0;
  }
`

export const Wrapper = styled.div`
  height: 100vh;
  left: 0;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 4000;
`

export const Background = styled.div`
  animation: ${props => props.show ? fadeIn : fadeOut } ${props => `${props.animationDuration}s`} linear forwards;
  background-color: #000000;
  height: 100vh;
  left: 0;
  opacity: 0.3;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 4001;
`

export const Menu = styled.div`
  animation: ${props => props.show ? slideIn : slideOut } ${props => `${props.animationDuration}s`} linear forwards;
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