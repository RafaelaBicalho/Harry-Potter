import styled from "styled-components"

export const Container = styled.div`
    align-items: center;
    background: var(--blue-500);
    border: 4px solid var(--yellow-700);
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    height: 300px;
    justify-content: center;
    text-align: center;
    width: 400px;
`
export const Perfil = styled.div`
    img {
        background: cover no-repeat;
        border-radius: 95px;
        flex-shrink: 0;
        height: 95px;
        width: 95px;
    }

    h2 {
        color: var(--yellow-700);
        font-size: 24px;
        font-weight: 700;
    }

    p {
        font-size: 16px;
        font-weight: 400;
    }
`
export const Data = styled.div`
    padding: 21px 0 23px 0;

    p {
        font-size: 20px;
        font-weight: 400;
    }
`