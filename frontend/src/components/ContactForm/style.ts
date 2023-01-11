import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    color: #465E77;
    padding: 150px;

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
