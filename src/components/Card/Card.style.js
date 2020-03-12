import styled from 'styled-components'

export const Wrapper = styled.div`
    border: 1px solid ${props => props.theme.colors.greyColor};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    height: auto;
    overflow: hidden;
    width: 100%;

    ${props => props.theme.breakpoints.largerThanTablet`
        height: 400px;
        width: 250px
    `}
`

export const Image = styled.div`
    background-image: url(${props => props.src});
    background-position: center center;
    background-size: cover;
    height: 150px;
    width: 100%;
`

export const UpperBody = styled.div`
    display: flex;
    width: 100%;
`

export const LowerBody = styled.div`
    background-color: ${props => props.theme.colors.secondaryColor};
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 15px 15px;
`

export const Title = styled.h1`
    color: ${props => props.theme.colors.primaryColor};
    font-size: 24px;
    margin: 0 0 10px;
`

export const Description = styled.p`
    margin: 0;
    width: 100%
`
