import styled from 'styled-components'

export const Wrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  @media only screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    height: 420px;
  }
`

export const Overlay = styled.div`
  background: linear-gradient(180deg, rgba(57, 29, 221, 0) 0%, #391DDD 100%);
  height: 100%;
  position: absolute;
  opacity: 0.9;
  right: 0;
  top: 0;
  transform: matrix(-1, 0, 0, 1, 0, 0);
  width: 100%;
`

export const Cropper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  overflow: hidden;
  width: 100%;
`

export const Image = styled.img`
  display: inline;
  margin: 0 auto;
  height: auto;
  width: 100%;
`

export const Title = styled.div`
  bottom: 30px;
  left: 18px;
  position: absolute;
`

