
import { useNavigate } from "react-router-dom";

import { FullDetailsContainer, PokemonStage, PokemonStageInfo, StatsContainer, ShinyContainer, PokemonInfoDetails, TypesContainer } from "./styles";
import {FilterButton, ReturnButton} from "../buttons"


export const FullDetails = ({pokemon}) =>{
    const navigate = useNavigate();

    return(
        <>
        <ReturnButton handleClick={()=> navigate("/")}/>
        <FullDetailsContainer>
            <PokemonStage>
                <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />
                <PokemonStageInfo>
                    <h1>#{pokemon.id}</h1>
                    <h1>{pokemon.name.charAt(0).toUpperCase()+ pokemon.name.slice(1)}</h1>
                </PokemonStageInfo>
            </PokemonStage>
            <PokemonInfoDetails>
                    <StatsContainer>
                        <h1>Details:</h1>
                        <TypesContainer>
                            <h2>Types:</h2> 
                            {pokemon.types.map((item)=>
                                <FilterButton name={item.type.name.charAt(0).toUpperCase() + item.type.name.slice(1)} /> 
                                )}
                                </TypesContainer>
                    <h2>Height: {parseInt(pokemon.height) / 10} meters</h2>
                    <h2>Weight: {parseInt(pokemon.weight) / 10} kg</h2>
                    </StatsContainer>
            <ShinyContainer>
                <h1>Shiny Version:</h1>
                    <img src={pokemon.sprites.other["official-artwork"].front_shiny} alt={pokemon.name}/>
            </ShinyContainer>
            </PokemonInfoDetails>
        </FullDetailsContainer>
                    </>
        )
}


