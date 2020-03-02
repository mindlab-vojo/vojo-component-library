import styled from 'styled-components'

export const SampleCard = styled.div`
    border-radius: 5px;
    border: 1px solid #CDCDCD;
    display: flex;
    padding: 0px 15px;
    width: auto;
`
export const SampleText = styled.p`
    color: ${(props) => props.color ? props.color : "#787878"};
`