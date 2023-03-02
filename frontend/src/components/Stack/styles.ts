import styled from 'styled-components';

export const Stack = styled.div<{bg: string}>`
    display: flex;
    justify-content: center;
    align-itens: center;
    font-size: 22px;
    color: #011221;
    margin-bottom: 15px;
    border-radius: 3px; 
    background-color: ${({ bg }) => bg};
    width: 28px;
    height: 28px;
    
    svg {
    margin: auto;
    // border: 1px solid red;
    }
`;
