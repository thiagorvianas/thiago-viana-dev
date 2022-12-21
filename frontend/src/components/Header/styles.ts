import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #1E2D3D;
    height: 62px;
`;

export const Logo = styled.img`
    width: 180px;
    margin: 0 100px;
`;

export const Menu = styled.nav`
    display: flex;
    font-size: 16px;
    font-weight: 450;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;

    a {
        padding: 20px;
        height: 100%;
        border-left: 1px solid #1E2D3D;
    }
`;

export const ContactMe = styled.div`

`;
