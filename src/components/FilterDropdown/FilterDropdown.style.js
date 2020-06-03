import styled from 'styled-components'

export const Wrapper = styled.div`
${props => props.isSelected 
    ? `
    background-color: ${props.theme.colors.whiteColor};
    ` : `
    background-color: ${props.theme.colors.blackColor};
    `
}
  align-items: center;
  border: 2px solid ${props => props.theme.colors.blackColor};
  border-radius: 5px;
  display: flex;
  padding: 12px 15px;
  width: 100%
`
export const Text = styled.div``

export const Icon = styled.div``