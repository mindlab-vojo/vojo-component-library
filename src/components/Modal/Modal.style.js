import styled from 'styled-components'

export const FixedWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  overflow: auto;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: ${props => props.zIndex};
`

export const Background = styled.div`
  box-sizing: border-box;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  left: 0;
  min-height: 100vh;
  padding: 18px 10px;
  position: absolute;
  top: 0;
  width: 100%;
`

export const Card = styled.div`
  background-color: ${props => props.theme.colors.whiteColor};
  border-radius: 5px;
  box-shadow: 0px 11px 15px rgba(0, 0, 0, 0.2), 0px 9px 46px rgba(0, 0, 0, 0.12), 0px 24px 38px rgba(0, 0, 0, 0.14);
  box-sizing: border-box;
  max-width: 960px;
  padding: 24px;
  width: 100%;
  ${props => props.cardWidth && `max-width: ${props.cardWidth};`}
`