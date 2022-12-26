import styled from "styled-components";


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
        display: flex;
        flex-direction: column;
        height: 60px;
        padding: 0px;
        border-left: 1px solid #1E2D3D;
        justify-content: flex-end;
        text-align: center;
    }
`;

export const LinkText = styled.div<{ selected: boolean }>`
    color: ${props => props.selected ? '#E5E9F0' : '#607B96' };
`

export const Selected = styled.div<{ selected: boolean }>`
    width: 150px;
    margin-top: 15px;
    height: 3px;
    transition: 0.3s;
    background-color: ${props => props.selected && '#FEA55F'};
`;

export const NavItems = styled.div`
    display: flex;

    .last {
        border-right: 1px solid #1E2D3D;
    }
`;

export const Before = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.img`
    width: 180px;
    margin: 0 100px;
`;

export const ContactMe = styled.div`
    height: 60px;
    // padding: 5px;
`;

// @media (max-width: 1023px) {
//     width: 100px;
//   }
