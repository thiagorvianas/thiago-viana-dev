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

export const ProjectTitle = styled.div`
    color: #607B96;
    font-size: 16px;
    margin-bottom: 10px;
    width: 345px;
    
    p {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    span {
        color: #5565E8;
        font-weight: 600;
    }
`;

export const DataContent = styled.div`
    display: flex;
    line-height: 25px;
    width: 100%;
    margin-bottom: 100px;
    padding: 75px;
    flex-wrap: wrap;
    overflow: auto;

    @media (max-width: 1023px) {
        display: flex;
        flex-direction: column;
        margin-left: 0;
        padding: 0;
        align-items: center;
    }
`;

export const Project = styled.div`
    margin: 30px;

    @media (max-width: 1023px) {
        margin: 30px 5px;
    }
`;

export const FiltersTitle = styled.div`
    color: #ffff;
    margin: 50px 20px 10px;

    span {
        color: #607B96;
    }
`;

export const Items = styled.div``;
