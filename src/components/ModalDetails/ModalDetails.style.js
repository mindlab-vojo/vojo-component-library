import styled from 'styled-components'

export const Header = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Information = styled.div`
  width: 100%
  display: flex
  justify-content: space-between
  align-items: center
  margin-bottom: 20px
  section {
    display: flex
    flex-direction: column
  }
`

export const Subtitle = styled.div`
  display: flex;
  align-items: center;
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
`

export const Locations = styled.div`
  flex-wrap: wrap;
  display: flex;
  margin: 20px 0 30px 0;
`

export const Cities = styled.span`
  box-sizing: border-box;
  border: 1px #666666 solid;
  padding: 4px 6px;
  border-radius: 14px;
  margin: 3px;
  width: fit-content;
  font-size: 12px;
  letter-spacing: 0.2px;
`

export const States = styled.span`
  box-sizing: border-box;
  border: 1px #666666 solid;
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