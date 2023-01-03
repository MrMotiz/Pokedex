import styled from "styled-components";

export const FullDetailsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 5%;
    margin: 10px;
    width: 90%;
    margin: 10px auto;
    padding: 10px;
    border-radius: 20px;
    box-shadow: 5px 3px 3px rgba(0, 0, 0, 0.20);
    background: green;
    h1{
        color: black;
        font-size: 30px;
    }
`;

export const PokemonStage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 100%;
    background: white;
    img{
        width: 40%;
        height: 40%;
    }
    `;

export const PokemonStageInfo = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 50%;
    h1{
        color: black;
        font-size: 30px;
    }
    
`;
export const PokePreNextContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 50%;
    margin: 0 auto;
    border: 1px solid black;
`;