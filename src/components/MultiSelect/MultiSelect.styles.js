import styled from 'styled-components';

const boxShadow = '0px 5px 10px rgba(101, 101, 101, 0.05), 0px 5px 10px rgba(61, 61, 61, 0.1)'

export const CheckboxContainer = styled.div`
    box-shadow: ${boxShadow};
    border: none;   
    border-radius: 4px;
    width: 100%;
    outline: none;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    label {
        padding: .5em;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    option + option {
        border-top: #F4F4F4 1px solid;
    }
   
`;

export const Input = styled.input`
    width: 100%;
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: ${boxShadow};
    padding: 1em;
    margin-bottom: 1em;
    caret-color: #B8B5C6;
    border: none;
    outline: 0;

    &:focus-within {
        border: solid 1px red;
    }
    
`