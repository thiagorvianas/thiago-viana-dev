import styled from "styled-components";

export const Container = styled.header`
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

export const Message = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 380px;

    h2 {
        font-size: 26px;
        color: #FFFFFF;
    }

    p {
        margin: 10px 0 30px;
        font-size: 18px;
    }
`;

export const NewMsgBtn = styled.button`
    background: #1C2B3A;
    border-radius: 8px;
    color: #FFFFFF;
    padding: 12px;
    cursor: pointer;
    
    :hover {
        background: #263b50;
    }
`;