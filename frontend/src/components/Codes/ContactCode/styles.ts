import styled from 'styled-components';

export const DataContainer = styled.div<{open: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    border-left: 1px solid #1E2D3D;
    width: 100%;
    
    @media (max-width: 1023px) {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        padding: ${({open}) => open ? '30px 15px' : '0'};
    }
`;

export const Counter = styled.div``;

export const Number = styled.div`
    min-width: 20px;
    margin-right: 10px;
    line-height: 25px;
    color: #465E77;
`;

export const ConstItems = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-size: 16px;
    margin-bottom: 24px;
    line-height: 25px;

    .const-declaration {
        color: #C98BDF;
        margin-right: 10px;
    }

    .const-name {
        color: #5565E8;
    }

    .const-equals {
        margin: 0 10px;
        color: #C98BDF;
    }

    .const-string {
        color: #5565E8;
    }

    p {
        color: #607B96;
    }

    .const-method {
        color: #FEA55F;
    }
`;

export const Object = styled.div`
    // display: flex;
    // flex-wrap: wrap;
    font-size: 16px;
    margin-bottom: 25px;
`;

export const Func = styled.div`
    // display: flex;
    // flex-wrap: wrap;
    font-size: 16px;
    margin-bottom: 25px;
`;

export const ObjectDeclaration = styled.div`
    display: flex;
    line-height: 25px;

    .const-declaration {
        color: #C98BDF;
        margin-right: 10px;
    }

    .const-name {
        color: #5565E8;
    }

    .const-equals {
        margin: 0 10px;
        color: #C98BDF;
    }

    .const-string {
        color: #5565E8;
    }

    p {
        color: #607B96;
    }

    .const-method {
        color: #FEA55F;
    }
`;

export const FuncDeclaration = styled.div`
    display: flex;
    line-height: 25px;

    .const-declaration {
        color: #C98BDF;
        margin-right: 10px;
    }

    .const-name {
        color: #5565E8;
    }

    .const-equals {
        margin: 0 10px;
        color: #C98BDF;
    }

    .const-string {
        color: #5565E8;
    }

    p {
        color: #607B96;
    }

    .const-method {
        color: #FEA55F;
    }
`;

export const ObjectContent = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 25px;

    .object-entrie {
        color: #FEA55F;
    }

    .const-declaration {
        color: #C98BDF;
        margin-right: 10px;
    }

    .const-name {
        color: #5565E8;
    }

    .const-equals {
        margin: 0 10px;
        color: #C98BDF;
    }

    .const-string {
        color: #5565E8;
    }

    .const-date {
        color: #607B96;
    }

    span {
        color: #607B96;
    }

    p {
      margin-left: 15px;
    }

    .const-method {
        color: #FEA55F;
    }
`;

export const FuncContent = styled.div`
    display: flex;
    line-height: 25px;
    margin-left: 15px;

    .const-declaration {
        color: #C98BDF;
        margin-right: 10px;
    }

    .const-name {
        color: #5565E8;
    }

    .const-equals {
        margin: 0 10px;
        color: #C98BDF;
    }

    .const-string {
        color: #5565E8;
    }

    .const-date {
        color: #607B96;
    }

    span {
        color: #607B96;
    }

    p {
        color: #607B96;
    }

    .const-method {
        color: #FEA55F;
    }
`;

export const Code = styled.div`
    max-width: 500px;
`;

