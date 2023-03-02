import styled from 'styled-components';

export const Container = styled.header`
    position: absolute;
    bottom: 0px;
    left: 0px;
    display: flex;
    align-items: center;
    border-top: 1px solid #1E2D3D;
    border-left: 1px solid #1E2D3D;
    border-bottom: 1px solid #1E2D3D;
    height: 50px;
    width: 100%;
    justify-content: space-between;
    font-size: 16px;
    color: #607B96;
    background-color: #011627;
`;

export const FindMe = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`;

export const FindText = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 20px;
    border-right: 1px solid #1E2D3D;
    margin-right: 20px;
`;

export const GitHubText = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 20px;
    border-left: 1px solid #1E2D3D;
`;

export const GitHub = styled.div`
    height: 100%;
`;

export const Social = styled.a`
    display: flex;
    align-items: center;
    height: 100%;
    border-right: 1px solid #1E2D3D;
    padding-right: 20px;
    color: #607B96;
`;
