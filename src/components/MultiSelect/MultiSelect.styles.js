import styled from 'styled-components';

const boxShadow = '0px 5px 10px rgba(101, 101, 101, 0.05), 0px 5px 10px rgba(61, 61, 61, 0.1)'

export const Container = styled.div`
    position: relative;

    label {
        display: none;
        background: white;
    }

    &:focus-within {
        label {
            display: flex;
        }
        input {
            border: solid 1px ${({ highlightColor }) => highlightColor};
        }
    }
`;


export const CheckboxContainer = styled.div`
    box-shadow: ${boxShadow};
    border: none;   
    border-radius: 4px;
    width: 100%;
    outline: none;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: absolute;
    margin-top: .3em;

    label {
        padding: .5em;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        align-items: flex-end;

        input {
            margin-right: .5em;
        }
    }

    label + label {
        border-top: #F4F4F4 2px solid;
    }
   
`;

export const Input = styled.input`
    width: 100%;
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: ${boxShadow};
    padding: 1em;
    caret-color: #B8B5C6;
    border: none;
    outline: 0;
    
`