import styled from 'styled-components';
import backgroundBlur from '../../images/background-blur.png';

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 90%;
    font-size: 16px;
    background-image: url(${backgroundBlur});
    background-position: 90%;
    background-size: cover 50%;
    background-repeat: no-repeat;
    border-left: 1px solid #1E2D3D;
    border-right: 1px solid #1E2D3D;

    @media (max-width: 1023px) {
        padding: 20px;
        height: 100%;
        background-size: 200%;
        background-position: 50%;
        justify-content: center;
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
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

    @media (max-width: 1023px) {

    
        h3 {
            color: #43D9AD;
            font-style: normal;
            font-weight: 450;
            font-size: 20px;
            line-height: 42px;
        }
    }
`;

export const TextContent = styled.div``;

export const GameContent = styled.div`
    width: 510px;
    height: 475px;
    
    @media (max-width: 1023px) {
        height: 0;
        width: 0;
    }
`;

export const Hello = styled.div`
    color: #E5E9F0;
`;

export const Links = styled.div`
    margin-top: 75px;

    p {
        margin-top: 10px;
    }
`;
