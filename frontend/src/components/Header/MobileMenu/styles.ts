import styled from 'styled-components';

export const Menu = styled.nav`
    display: flex;
    font-size: 16px;
    font-weight: 450;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    width: 100%;

    .nav-item {
        align-items: center;
        display: flex;
        height: 100%;
        border-bottom: 1px solid #1E2D3D;
    }
`;

export const OpenedMenu = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 62px;
    left: 0;
    index: 1;
    width: 100vw;
    height: 90%;
    transition: all 0.3s linear;
    border-top: 1px solid #1E2D3D;
    border-left: 1px solid #1E2D3D;
    border-right: 1px solid #1E2D3D;
`;

export const Before = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.img`
    width: 140px;
    margin-left: 20px;
`;

export const NavItems = styled.div`
    display: flex;
    flex-direction: column;
    
`;

export const ContactMe = styled.div``;

export const LinkText = styled.div<{ selected: boolean }>`
    color: ${props => props.selected ? '#E5E9F0' : '#607B96' };
`

export const Selected = styled.div<{ selected: boolean }>`
    width: 3px;
    margin-right: 15px;
    height: 50px;
    transition: 0.3s;
    background-color: ${props => props.selected && '#FEA55F'};
`;

export const BurgerMenu = styled.div<{ openMenu: boolean }>`
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    transition: all 0.3s linear;
    z-index: 20;

    :hover {
        cursor: pointer;
        opacity: 80%
    }

    .bar-one {
      transform: ${({ openMenu }) => openMenu ? 'rotate(45deg)' : 'rotate(0)'};
    }
    .bar-two {
      transform: ${({ openMenu }) => openMenu ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ openMenu }) => openMenu ? 0 : 1};
    }
    .bar-three {
      transform: ${({ openMenu }) => openMenu ? 'rotate(-45deg)' : 'rotate(0)'};
    }
`;

export const Icon = styled.div`
    width: 18px;
    height: 2px;
    transform-origin: left;
    transition: all 0.3s linear;
    margin: 2px;
    background: #607B96;
`;

// @media (max-width: 1023px) {
//     width: 100px;
//   }
