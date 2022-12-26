import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #1E2D3D;
    height: 62px;
    justify-content: space-between;
`;

export const Menu = styled.nav`
    display: flex;
    font-size: 16px;
    font-weight: 450;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    width: 100%;
    justify-content: space-between;

    a {
        padding: 20px;
        height: 100%;
        border-left: 1px solid #1E2D3D;
    }
`;

export const NavItems = styled.div`
    .last {
        border-right: 1px solid #1E2D3D;
    }
`;

export const ContactMe = styled.div``;

export const BurgerMenu = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Icon = styled.div`
    width: 18px;
    height: 2px;
    margin: 2px;
    background: #607B96;
`;

// @media (max-width: 1023px) {
//     width: 100px;
//   }
