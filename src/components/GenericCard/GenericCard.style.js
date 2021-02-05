import styled from 'styled-components'

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  position: relative;
  width: 100%;
`

export const NewTag = styled.div`
  background-color: ${props => props.theme.colors.pinkColor};
  border-radius: 5px;
  padding: 1px 6px 2px;
  position: absolute;
  right: 8px;
  top: -2px;
`

export const ImageBlock = styled.div`
  margin-right: 8px;
  margin-left: 4px;
  width: 72px;
`

export const ImageWrapper = styled.div``

export const ImageCropper = styled.div`
  display: flex;
  justify-content: center;
  width: 72px;
  height: 72px;
  position: relative;
  overflow: hidden;
  border-radius: ${props => props.borderRadius};
`

export const Image = styled.img`
  display: inline;
  margin: 0 auto;
  height: 100%;
  width: auto;
  z-index: 1;
`

export const DataBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justifyContent};
  min-height: 65px;
`

export const Title = styled.div`
  margin-bottom: 4px;
`

export const Subtitle = styled.div`
  margin-bottom: 4px; 
`
export const Unavailable = styled.div`
  margin: 4px 0;
`

export const Free = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 4px;
`

export const Workload = styled.div`
  display: flex;
  align-iteMs: center;
  width: 100%;
`

export const WorkloadText = styled.div`
  display: flex;
  align-iteMs: center;
`

export const WorkloadTextWrapper = styled.div`
    margin-left: 10px;
    &:nth-child(2) {
      margin-left: 3px;
    }
`

export const CoursesAvailable = styled.div`
  display: flex;
  align-iteMs: center;
  width: 100%;
`

export const CoursesAvailableIcon = styled.div`
  margin-right: 9px;
`
