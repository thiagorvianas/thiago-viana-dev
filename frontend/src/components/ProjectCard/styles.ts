import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    height: 320px;
    width: 350px;
    border-radius: 10px;
    border: 1px solid #1E2D3D;
`;

export const Cover = styled.div<{image: any}>`
    display: flex;
    justify-content: flex-end;
    padding: 15px;
    background-image: url('${({ image }) => image}');
    background-size: cover;
    width: 100%;
    min-height: 175px;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 16px;
    justify-content: space-between;
    padding: 10px 20px 15px 20px;
    background-color: #011221;
    height: 100%;
    width: 100%;
`;
    
export const Text = styled.p`
    color: #607B96;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const Stacks = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ViewProject = styled.a`
    display: flex;
    justify-content: center;
    color: white;
    padding: 7px 14px;
    border-radius: 10px;
    background: #1C2B3A;
    width: 150px;

    :hover {
        background: #263b50;
    }
`;
