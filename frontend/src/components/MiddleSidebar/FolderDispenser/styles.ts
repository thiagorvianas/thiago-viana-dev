import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 16px;
`;

export const Folder = styled.div<{selected: boolean}>`
    display: flex;
    align-items: center;
    padding: 5px 15px;
    color: ${props => props.selected ? '#FFFFFF' : '#607B96'};

    :hover {
        cursor: pointer;
    }
`;

export const FolderCloseIcon = styled.div`
    display: flex;
    background: none;
    color: #607B96;
    font-size: 25px;
`;

export const FolderIcon = styled.div<{color: string}>`
    display: flex;
    background: none;
    color: ${ props => props.color };
`;

export const FolderText = styled.p`
    // margin-bottom: 8px;
    margin-left: 5px;
    display: flex;
    align-items: center;
`;

export const Items = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;
