import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
    padding-left: 25px;
`;

export const Item = styled.div`
    display: flex;
    align-items: center;
    padding: 5px 15px;

    :hover {
        cursor: pointer;
    }
`;

export const ItemIcon = styled.div`
    display: flex;
    background: none;
    // margin-right: 5px;
    min-width: 20px;
`;

export const ItemText = styled.p`
    margin-right: 15px;
    text-overflow: ellipsis;
`;

