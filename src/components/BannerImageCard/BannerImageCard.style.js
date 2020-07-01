import styled from 'styled-components'

export const Wrapper = styled.div`
  border-radius: 8px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 60px;
  overflow: hidden;
  position: relative;
  width: 100%;
`

export const Cropper = styled.div`
  align-items: center;
  box-sizing: border-box;
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

export const Overlay = styled.div`
  background: #391DDD;
  box-sizing: border-box;
  height: 100%;
  position: absolute;
  opacity: 0.4;
  top: 0;
  transform: matrix(-1, 0, 0, 1, 0, 0);
  width: 100%;
`
export const TextArea = styled.div`
  bottom: 0px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 0 12px;
  position: absolute;
  top: 0px;
  width: 100%;
`

export const Title = styled.div``

export const Subtitle = styled.div``