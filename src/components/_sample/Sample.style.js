import styled from 'styled-components'
import * as style from './../../style'

export const Card = styled.div`
    border-radius: 5px;
    border: 1px solid #CDCDCD;
    display: flex;
    padding: 0px 15px;
    width: auto;
`
export const Text = styled.p`
    color: ${(props) => props.color ? props.color : style.colors.primaryColor};
`