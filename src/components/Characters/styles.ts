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
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;

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
export const Image = styled.div<{background:string}>`
    background-image: url(${props => props.background});
    background-size: cover;
    background-repeat: no-repeat;
    width: 95px;
    height: 95px;
    border-radius: 95px;
`

export const Data = styled.div`
    padding: 21px 0 23px 0;

    p {
        font-size: 20px;
        font-weight: 400;
    }
`
