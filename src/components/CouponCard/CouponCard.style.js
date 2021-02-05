import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => props.backgroundColor};
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  border: 2px dashed #391DDD;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 16px 18px;
`

export const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const DataBlock = styled.div`
  display: flex;
  align-items: flex-start;
  width: 80%;
  justify-content: ${props => props.justifyText};
  flex-direction: column;
  margin: 0 12px;
  h3 {
      font-size: 14px;
      font-family: 'Montserrat', sans-serif;
      color: red;
      letter-spacing: 0.2px;
  }
`

export const Title = styled.div`
  margin-bottom: 4px;
`

export const Subtitle = styled.div`
  margin-bottom: 4px; 
`
export const Status = styled.div`
`