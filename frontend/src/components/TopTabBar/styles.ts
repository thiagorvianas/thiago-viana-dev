import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
    color: #607B96;
    border-bottom: 1px solid #1E2D3D;
`;

export const Tab = styled.div`
    display: flex;
    align-items: center;
    border-right: 1px solid #1E2D3D;
    padding: 5px 15px;
`;

export const TabText = styled.p`
    margin-right: 15px;
`;

export const TabCloseBtn = styled.button`
    background: none;
    color: #607B96;
    padding: 5px;

    :hover {
        cursor: pointer;
    }
`;
