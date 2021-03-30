import styled from 'styled-components'

export const Header = styled.div`
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  div {
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
  }
`

export const Information = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

export const FirstBlock = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.25px;
  }

  span {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    margin-top: 8px;
  }
`

export const SecondBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  h1 {
    font-weight: bold;
    font-size: 42px;
    line-height: 38px;
    letter-spacing: -1.5px;
  }
  h3 {
    font-size: 16px;
    line-height: 20px;
  }
`

export const Subtitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  h3{
    margin-left: 14px;
    color: ${props => props.theme.colors.primaryColor};
    background-color: ${props => props.theme.colors.lightPurpleColor};
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    border-radius: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px 8px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto;
  padding-right: 12px;
  height: 60vh;
	width: 100%;

  ::-webkit-scrollbar-track {
    background-color: #F4F4F4;
  }
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.lightGreyColor};
    border-radius: 30px;
  }

	background:
		linear-gradient(white 30%, rgba(255,255,255,0)),
		linear-gradient(rgba(255,255,255,0), white 70%) 0 100%,
		radial-gradient(50% 0, farthest-side, rgba(0,0,0,.2), rgba(0,0,0,0)),
		radial-gradient(50% 100%,farthest-side, rgba(0,0,0,.2), rgba(0,0,0,0)) 0 100%;

	background:
		linear-gradient(white 30%, rgba(255,255,255,0)),
		linear-gradient(rgba(255,255,255,0), white 70%) 0 100%,
		radial-gradient(farthest-side at 50% 0, rgba(0,0,0,.2), rgba(0,0,0,0)),
		radial-gradient(farthest-side at 50% 100%, rgba(0,0,0,0), rgba(0,0,0,0)) 0 100%;
    
	background-repeat: no-repeat;
	background-color: white;
  background-size: 100% 40px, 100% 40px, 100% 14px, 100% 14px;
	background-attachment: local, local, scroll, scroll;
`

export const Details = styled.div`
  h4 {
      color: #666666;
      font-weight: 600;
      font-size: 16px;
      line-height: 32px;
      margin-bottom: 4px;
  }

  section {
    height: fit-content;
    margin-bottom: 30px;
  }

  span {
      border: 1px ${props => props.theme.colors.lightGreyColor} solid;
      width: fit-content;
      border-radius: 15px;
      padding: 2px 8px;
      margin-right: 8px;
    }
`

export const Locations = styled.div`
  flex-wrap: wrap;
  display: flex;
  margin: 20px 0 30px 0;
`

export const Cities = styled.span`
  box-sizing: border-box;
  border: 1px ${props => props.theme.colors.lightGreyColor} solid;
  padding: 4px 6px;
  border-radius: 14px;
  margin: 3px;
  width: fit-content;
  font-size: 12px;
  letter-spacing: 0.2px;
`

export const States = styled.span`
  box-sizing: border-box;
  border: 1px ${props => props.theme.colors.lightGreyColor} solid;
  padding: 4px;
  border-radius: 14px;
  margin: 3px;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  font-size: 12px;
  justify-content: center;
  letter-spacing: 0.2px;
`