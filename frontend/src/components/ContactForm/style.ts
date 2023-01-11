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
        margin-bottom: 20px;
    }
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
    min-width: 380px;
`;

export const Title = styled.p`
    margin-bottom: 10px;
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
`;

export const FinalContent = styled.div`
    display: flex;
    width: 372px;
`;

export const SubmitBtn = styled.button`
    background: #1C2B3A;
    border-radius: 8px;
    color: #FFFFFF;
    padding: 12px;
    cursor: pointer;
    
    :hover {
        opacity: 90%;
    }
`;
