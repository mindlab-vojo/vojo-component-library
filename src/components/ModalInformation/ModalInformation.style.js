import styled from 'styled-components'

export const Content = styled.div`
  width:100%;   
  display:flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  font-weight: bold;
  font-size: 1.2em;
  line-height: 20px;
  margin:0;
`

export const Description = styled.h3`
  font-weight: normal;
  font-size: 1em;
  line-height: 20px;
  color: #9E9E9E;
  text-align: center;
  margin-top: 8px;
  margin-bottom:24px
`

export const ListContainer = styled.div`
  width:100%;
  margin-bottom:24px
`

export const UList = styled.ul`
  list-style: none;
  font-size: 1em;
  padding: 0;
  margin:0;

  span {
    letter-spacing: 5px;
  }
`

export const OList = styled.ol`
  list-style: none;
  font-size: 1em;
  padding: 0;
  margin:0;

  span {
    color: ${props => props.theme.colors.primaryColor};
    font-weight: bold;
    letter-spacing: 0.2px;
  }
`

export const Item = styled.li`
  margin: 3px 0;
`

// ------------------------------------------------------------------------------------------------------
export const FixedWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  overflow: scroll;
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