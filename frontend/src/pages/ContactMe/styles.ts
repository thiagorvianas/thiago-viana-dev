import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 100%;
    border-left: 1px solid #1E2D3D;
    border-right: 1px solid #1E2D3D;

    @media (max-width: 1023px) {
        flex-direction: column;
    }
`;

export const Content = styled.div`
    border-right: 1px solid #1E2D3D;
    width: 100%;
    height: 100%;

    @media (max-width: 1023px) {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        height: auto;
    }
`;

export const Form = styled.div`
    display: flex;
    height: 90%;
`;
