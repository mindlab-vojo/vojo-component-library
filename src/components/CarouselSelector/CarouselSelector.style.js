import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`

export const Carousel = styled.div`
  overflow: auto;
  white-space: nowrap;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  };
`

export const Circle = styled.div`
  align-items: center;
  background-color: ${props => props.isSelected ? props.theme.colors.primaryColor : '#e1e4e8' };
  border: 1px solid ${props => props.theme.colors.blackColor};
  border-radius: 100px;
  cursor: pointer;
  display: inline-block;
  justify-content: center;
  height: 47px;
  margin: 12px 5px;
  width: 47px;
`

export const TextWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 47px;
  width: 47px;
`

export const Description = styled.div``