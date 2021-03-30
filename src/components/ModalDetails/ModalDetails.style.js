import styled from 'styled-components'

export const Content = styled.div`
  width:100%;   
  display:flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Rubik', sans-serif;
`

export const Title = styled.h1`
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  margin:0;
`

export const Description = styled.h3`
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #9E9E9E;
  text-align: center;
  margin-top: 8px;
  margin-bottom:23px
`

export const ListContainer = styled.div`
  width:100%;
  margin-bottom:24px
`

export const UList = styled.ul`
  list-style: none;
  font-size: 14px;
  padding: 0;
  margin:0;

  span {
    color: ${props => props.theme.colors.primaryColor};
    letter-spacing: 5px;
  }
`

export const OList = styled.ol`
  list-style: none;
  font-size: 14px;
  padding: 0;
  margin: 0;

  span {
    color: ${props => props.theme.colors.primaryColor};
    font-weight: bold;
    letter-spacing: 0.2px;
    margin-right: 2px;
  }
`

export const Item = styled.li`
  margin: 3px 0;
`