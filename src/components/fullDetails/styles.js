import styled from "styled-components";

export const FullDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5%;
    margin: 10px;
    width: 80%;
    margin: 10px auto;
    padding: 10px;
    border-radius: 20px;
    box-shadow: 5px 3px 3px rgba(0, 0, 0, 0.20);
    background: lightgray;
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
    width: 60%;
    height: 100%;
    background: lightblue;
    margin: 10px;
    padding: 10px;
    border-radius: 20px;
    box-shadow: 5px 3px 3px rgba(0, 0, 0, 0.20);
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

export const PokemonInfoDetails = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin: 0 auto;
    h1{
        font-size: 25px;
        border: 1px solid white;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        background: lightseagreen;
        color: aliceblue;
        padding: 10px;
    
    }
`;

export const StatsContainer = styled.div`
    width: 35%;
    background-color: aliceblue;
    box-shadow: 5px 3px 3px rgba(0, 0, 0, 0.20);
    border-radius: 20px;
    h2{
        padding: 10px;
    }
    `;
export const TypesContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;
export const ShinyContainer = styled.div`
    width: 30%;
    height: 30%;
    background-color: aliceblue;
    box-shadow: 5px 3px 3px rgba(0, 0, 0, 0.20);
    border-radius: 20px;
        img{
            width: 100%;
            height: 100%;
        }
    `;