import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 16px;
    width: 300px;
    border-right: 1px solid #1E2D3D;
    // margin-bottom: 10px;
`;

export const Dispenser = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 15px;
    color: #FFFFFF;
    border-bottom: 1px solid #1E2D3D;
    // margin-bottom: 10px;

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
`;
