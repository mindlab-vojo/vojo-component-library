import styled from 'styled-components'

export const ContainerTest = styled.div`
    width: 100%;
    height: 58px;
`

export const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: ${props => props.height};
    background-color: ${props => props.backgroundColor};
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 5px 10px rgba(101, 101, 101, 0.05), 0px 5px 10px rgba(61, 61, 61, 0.1);
    border-radius: ${props => props.borderRadius};
    padding: 12px 18px;
    cursor: pointer;
`

export const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const TextContainer = styled.div`
    display: flex;
    align-items: flex-start;
    width: 80%;
    justify-content: ${props => props.justifyText};
    flex-direction: column;
    margin: 0 12px;
`

export const Wrapper = styled.div`
    margin-top: 4px;
`

export const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 40px;
    height: 40px;
`