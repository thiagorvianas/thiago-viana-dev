import styled from 'styled-components';

export const Container = styled.body`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%
    font-size: 16px;
    margin: auto;
`;

export const Content = styled.div`
    margin: auto;
    height: 100%;
    
    h1 {
        color: #E5E9F0;
        font-style: normal;
        font-weight: 400;
        font-size: 62px;
        line-height: 81px;
    }

    h4 {
        color: #E5E9F0;
        font-style: normal;
        font-weight: 450;
        font-size: 18px;
        line-height: 24px;
    }

    h3 {
        color: #4D5BCE;
        font-style: normal;
        font-weight: 450;
        font-size: 32px;
        line-height: 42px;
    }
`;

export const TextContent = styled.div``;

export const GameContent = styled.div``;

export const Hello = styled.div`
    color: #E5E9F0;
`;

export const Links = styled.div`
    margin-top: 75px;

    p {
        margin-top: 10px;
    }
`;
