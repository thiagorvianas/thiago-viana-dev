import styled from 'styled-components';

export const ConstItems = styled.p<{ mobile: boolean }>`
    display: flex;
    flex-wrap: wrap;
    font-size: ${props => props.mobile ? '14px' : '16px'};

    .const-declaration {
        color: #4D5BCE;
        margin-right: 10px;
    }

    .const-name {
        color: #43D9AD;
    }

    .const-equals {
        margin: 0 10px;
        color: #E5E9F0;
    }

    .const-string {
        color: #E99287;
    }
`;