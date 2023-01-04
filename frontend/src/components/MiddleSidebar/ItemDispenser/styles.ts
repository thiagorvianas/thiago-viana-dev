import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 16px;
    min-width: 300px;

    @media (max-width: 1023px) {
        width: 100%;
        border: none;
        overflow: hidden;
    }
`;

export const Dispenser = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 15px;
    color: #FFFFFF;
    border-bottom: 1px solid #1E2D3D;
    user-select: none;

    @media (max-width: 1023px) {
        background-color: #1E2D3D;
        margin-bottom: 5px;
        padding: 0 15px;
        width: 100%;
        overflow: hidden;
        min-height: 50px;
    }

    :hover {
        cursor: pointer;
    }
`;

export const DispenserCloseIcon = styled.div`
    background: none;
    display: flex;
    color: #FFFFFF;
    font-size: 25px;
`;

export const DispenserText = styled.p``;

export const Items = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @media (max-width: 1023px) {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
`;
