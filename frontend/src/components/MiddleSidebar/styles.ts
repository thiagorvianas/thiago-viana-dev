import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 16px;
    color: #607B96;
    border-right: 1px solid #1E2D3D;
    width: 350px;
    
    
    @media (max-width: 1023px) {
        width: 100%;
        border: none;
    }
`;