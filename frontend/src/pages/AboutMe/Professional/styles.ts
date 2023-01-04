import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    font-size: 16px;
    color: #607B96;
    border-left: 1px solid #1E2D3D;
    border-right: 1px solid #1E2D3D;
    width: 100%;

    @media (max-width: 1023px) {
        display: flex;
        flex-direction: column;
    }
`;

export const DataContainer = styled.div<{open: boolean}>`
    display: flex;
    height: 100%;
    padding: 30px 75px;
    
    @media (max-width: 1023px) {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        padding: ${({open}) => open ? '30px 15px' : '0'};
    }
`;

export const Items = styled.div`
    padding: 10px 0;
    border-bottom: 1px solid #1E2D3D;

    @media (max-width: 1023px) {
        overflow: hidden;
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

export const DataContent = styled.div`
    margin-left: 15px;
    line-height: 25px;
    width: 100%;

    @media (max-width: 1023px) {
        margin-left: 0;
    }
`;

export const HandleItem = styled.div<{selected: boolean}>`
    color: ${(props) => props.selected ? '#ffffff' : '#607B96'};
`;

export const Counter = styled.div``;

export const Number = styled.div`
    min-width: 20px;
    margin-right: 10px;
    line-height: 25px;
`;
