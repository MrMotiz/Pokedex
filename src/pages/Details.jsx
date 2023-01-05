import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { FullDetails, PreviewNextPoke } from "../components"
import { getPokemons} from "../api"
import {Loading} from "../components/loading";
import {noPreviewPokemon, noNextPokemon} from "../utils/noPokemon"

export const Details = () =>{

    let {id}= useParams();
    let setID = parseInt(id);
    const navigate = useNavigate();
    const [previewPokemon, setPreviewPokemon] = useState(noPreviewPokemon);
    const [currentPokemon, setCurrentPokemon] = useState(null);
    const [nextPokemon, setNextPokemon] = useState(noNextPokemon);
    const [loading, setLoading] = useState(true);
    const tempCurrentPokemon = useRef();

    const getCurrentPokemon = async()=>{
        try{
            if(setID > 1 ){
                const prePokemon = await getPokemons(setID-1);
                setPreviewPokemon(prePokemon);
            }
            if(id < 906){
                const nextPoke = await getPokemons(setID+1);
                setNextPokemon(nextPoke);
            }
            const details = await getPokemons(setID);
            setCurrentPokemon(details);
            setLoading(false);
        } catch(err){
            console.log(err);
        }
    }
    const handlePreview = () =>{
        if(setID > 1 ){
            navigate(`/pokemon/${setID -= 1}`)
            getCurrentPokemon();
        }
    }
    const handleNext = () =>{
        if(setID < 906){
            navigate(`/pokemon/${setID += 1}`)
        getCurrentPokemon();
    }
}
    tempCurrentPokemon.current = getCurrentPokemon;
    useEffect(()=>{
        tempCurrentPokemon.current();
    }, [])
        return ( 
            <>
            {loading ? 
                <Loading/> :
                <FullDetails pokemon={currentPokemon}/>}
                <PreviewNextPoke prePoke={previewPokemon} nextPoke={nextPokemon} handlePreview={handlePreview} handleNext={handleNext} />
            </>
                            
    )
}