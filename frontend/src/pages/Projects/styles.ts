import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 100%;
    border-left: 1px solid #1E2D3D;
    border-right: 1px solid #1E2D3D;

    @media (max-width: 1023px) {
        flex-direction: column;
        width: 100%;
        margin-bottom: 20px;
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

export const DataContent = styled.div`
    margin-left: 15px;
    line-height: 25px;
    width: 100%;

    @media (max-width: 1023px) {
        margin-left: 0;
    }
`;
