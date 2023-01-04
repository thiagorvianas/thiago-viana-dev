import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    font-size: 16px;
    color: #607B96;
    height: 100%; 
    width: 75px;  
    font-size: 24px;
    border-left: 1px solid #1E2D3D;
`;

export const NavSidebar = styled.nav`
    padding: 15px 0;

    @media (max-width: 1023px) {
        width: 100%;
    }
`;

export const NavItem = styled.div<{selected: boolean}>`
    margin-bottom: 20px;
    opacity: ${props => props.selected ? '100%' : '40%'};

    :hover {
        cursor: pointer;
    }
`;
