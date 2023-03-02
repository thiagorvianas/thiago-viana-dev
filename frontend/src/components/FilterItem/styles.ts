import styled from 'styled-components';

export const Item = styled.div`
    padding: 0 20px;
    display: flex;
    align-items: center;
    max-height: 50px;
    overflow: hidden;
`;

export const Check = styled.input`
    width: 18px;
    height: 18px;
    -webkit-appearance: none;
    border: 1px solid #607B96;
    border-radius: 3px;
    outline: none;
    cursor: pointer;
    
    :checked {
        background: #607B96;
        color: #ffff;
    
        &:after {   
            content: 2714;
            color: #fff;
        }
    }
`;

export const Text = styled.label`
    cursor: pointer;
`;

export const Icon = styled.div`
    display: flex;
    margin: 20px 5px 20px 20px;
    font-size: 20px;
    cursor: pointer;
`;
