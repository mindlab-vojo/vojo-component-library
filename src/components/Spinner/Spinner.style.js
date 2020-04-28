import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: ${props => props.spinnerArea ? props.spinnerArea : '100px'};
  justify-content: center
`
export const Spinner = styled.svg`
  animation: ${rotate} 2s linear infinite;
  enable-background:new 0 0 512 512;
`