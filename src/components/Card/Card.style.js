import styled from 'styled-components'

export const Card = styled.div`
  border-radius: 6px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  padding: ${props => props.padding};
  position: relative;
  width: 100%;
`