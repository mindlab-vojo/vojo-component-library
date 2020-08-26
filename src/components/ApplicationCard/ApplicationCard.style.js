import styled from 'styled-components'

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
`

export const ImageCropper = styled.div`
  width: 72px;
  height: 72px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
`

export const Image = styled.img`
  display: inline;
  margin: 0 auto;
  height: 100%;
  width: auto;
  z-index: 1;
  ${props => props.isClosed && `filter: grayscale(100%);`}
`

export const InfoWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`