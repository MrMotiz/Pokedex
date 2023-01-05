import styled from "styled-components";

export const PokePreNextContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
    border-radius: 20px;
    background: rgba(245, 245, 245, 0.5);
    box-shadow: 5px 3px 3px rgba(0, 0, 0, 0.20);
`;

export const PokeInfoContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 15%;
    background: white;
    border-radius: 20px;
    margin: 10px;
    box-shadow: 5px 3px 3px rgba(0, 0, 0, 0.20);
    cursor: pointer;
    `;

export const PokeInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
        width: 100%;
        height: 100%;
        margin:0px -5px;
    }
    h1{
        font-size: 15px;
    }
`;