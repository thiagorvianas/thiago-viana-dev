import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #465E77;
    min-width: 40vw;

    @media (max-width: 1023px) {
        flex-direction: column;
        width: 100%;
        margin-bottom: 50px;
        min-width: 0;
    }
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
    min-width: 372px;

    @media (max-width: 1023px) {
        min-width: 0;
    }
`;

export const Title = styled.p`
    display: flex;
    margin-bottom: 10px;

    span {
        font-size: 10px;
    }
`;

export const ShortText = styled.input`
    width: 372px;
    height: 41px;
    border: 1px solid #1E2D3D;
    border-radius: 8px;
    background: #011221;
    font-size: 16px;
    padding: 5px 15px;
    color: #465E77;

    &:focus {
        border: 1px solid #607B96;
    }

    @media (max-width: 1023px) {
        width: 320px;
        height: 41px;
    }
`;

export const Message = styled.textarea`
    width: 372px;
    height: 145px;
    border-radius: 8px;
    border: 1px solid #1E2D3D;
    background: #011221;
    resize: none;
    padding: 15px;
    color: #465E77;
    font-size: 16px;

    @media (max-width: 1023px) {
        width: 320px;
    }
`;

export const FinalContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 372px;
    
    @media (max-width: 1023px) {
        width: 320px;
    }
`;

export const SubmitBtn = styled.button<{disableBtn: boolean}>`
    background: ${props => props.disableBtn ? 'none' : '#1C2B3A'};
    border-radius: 8px;
    color: ${props => props.disableBtn ? '#263b50' : '#fff' };
    padding: 12px;
    cursor: ${props => props.disableBtn ? 'auto' : 'pointer' };
    border: ${props => props.disableBtn ? '1px solid #263b50' : '1px solid #1E2D3D' };
    
    :hover {
        background: ${props => props.disableBtn ? 'none' : '#263b50' };
    }
`;

export const Counter = styled.p<{length: number}>`
    text-align: right;
    margin-top: 5px;
    font-size: 14px;
    color: ${props => props.length !== 160 && '#263b50'};
`;

export const Loading = styled.div`
    display: flex;   
    padding: 0 15px;
    
    &::after {
        display: flex;
        animation: ellipsis steps(4,end) 900ms infinite;
        content: ".";
        width: 1em;
        text-align: left;
      }
      @keyframes ellipsis {
        0% {
          content: ".";
        }
        33% {
          content: "..";
        }
        66% {
          content: "...";
        }
      }
`;

export const Required = styled.p`
    font-size: 14px;
    color: #263b50;
    font-style: italic;
    padding-right: 7px;
`;
