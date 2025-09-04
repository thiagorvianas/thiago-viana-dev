import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 16px;
    color: #607B96;
    border-right: 1px solid #1E2D3D;
    width: 420px;
    height: 100vh;

    @media (min-width: 1023px) {
        padding: 0 0 110px 0;
    }

    @media (max-width: 1023px) {
        width: 100%;
        border: none;
        height: 50px;
    }
`;