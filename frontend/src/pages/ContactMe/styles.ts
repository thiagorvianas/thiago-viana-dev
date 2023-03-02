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

export const Title = styled.div`
    color: #ffffff;
    padding: 20px 0px 25px 20px;
    border-left: 1px solid #1E2D3D;
    border-right: 1px solid #1E2D3D;
    border-bottom: 1px solid #1E2D3D;
    overflow: hidden;
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
        padding-top: 25px;
    }
`;

export const Form = styled.div`
    display: flex;
    height: 80%;

    @media (max-width: 1023px) {
        flex-direction: column;
    }
`;
