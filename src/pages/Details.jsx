import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { FullDetails } from "../components"
import { getPokemonData} from "../api"
import {Loading} from "../components/loading";
import {noPreviewPokemon, noNextPokemon} from "../utils/noPokemon"

export const Details = () =>{

    const {id}= useParams();
    const [previewPokemon, setPreviewPokemon] = useState(noPreviewPokemon);
    const [currentPokemon, setCurrentPokemon] = useState(null);
    const [nextPokemon, setNextPokemon] = useState(noNextPokemon);
    const [loading, setLoading] = useState(true);

    const getCurrentPokemon = async()=>{
        try{
            if(id > 1 ){
                const prePokemon = await getPokemonData(id-1);
                setPreviewPokemon(prePokemon);
            }
            if(id < 906){
                const nextPoke = await getPokemonData(parseInt(id)+1);
                setNextPokemon(nextPoke);
                console.log(nextPoke);
            }
            const details = await getPokemonData(id);
            setCurrentPokemon(details);
            setLoading(false);
        } catch(err){
            console.log(err);
        }
    }

    
    useEffect(()=>{
        getCurrentPokemon();
    }, [])
        return ( 
            <>
            {loading ? 
                <Loading/> :
                <FullDetails pokemon={currentPokemon} prePoke={previewPokemon} nextPoke={nextPokemon} />}
            </>
                            
    )
}