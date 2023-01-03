
import { FullDetailsContainer, PokemonStage, PokemonStageInfo, PokePreNextContainer } from "./styles";
import {FilterButton} from "../buttons"


export const FullDetails = ({pokemon, prePoke, nextPoke}) =>{

    return(
        <>
        <FullDetailsContainer>
            <PokemonStage>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <PokemonStageInfo>

                <h1>{pokemon.name}</h1>
                <h1>#{pokemon.id}</h1>
            </PokemonStageInfo>
            <PokemonStageInfo>
                {pokemon.types.map((item)=>
                    <FilterButton name={item.type.name.charAt(0).toUpperCase() + item.type.name.slice(1)}/> 
                    )}
                    </PokemonStageInfo>
            </PokemonStage>
        </FullDetailsContainer>
            <PokePreNextContainer>
            <img src={prePoke.sprites.front_default} alt={pokemon.name} style={{width: "200px", height: "200px"}} />
            <img src={nextPoke.sprites.front_default} alt={pokemon.name} style={{width: "200px", height: "200px"}} />
            </PokePreNextContainer>
                    <img src={pokemon.sprites.front_shiny} alt={pokemon.name} style={{width: "300px", height: "300px"}} />
                    </>
        )
}


