import styled from 'styled-components'
import style from '../../style'

export const Wrapper = styled.div`
    border: 1px solid ${style.colors.greyColor};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    height: auto;
    overflow: hidden;
    width: 100%;

    ${
  style.breakpoints.largerThanTablet`
                height: 400px;
                width: 250px
            `
}
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
    display: flex;
    flex-direction: column;
    padding: 15px 15px;
`

export const Title = styled.h1`
    color: ${style.colors.primaryColor};
    font-size: 24px;
    margin: 0 0 10px;
`

export const Description = styled.p`
    margin: 0;
    width: 100%
`
