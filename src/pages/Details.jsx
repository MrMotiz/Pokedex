import { useState, useEffect, useRef, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { FullDetails, PreviewNextPoke } from "../components"
import {Loading} from "../components/loading";
import {noPreviewPokemon, noNextPokemon} from "../utils/noPokemon"
import { AppContext } from "../App";

export const Details = () =>{

    let {id}= useParams();
    let setID = parseInt(id);
    const navigate = useNavigate();
    const {pokeList} = useContext(AppContext);
    const [previewPokemon, setPreviewPokemon] = useState(noPreviewPokemon);
    const [currentPokemon, setCurrentPokemon] = useState(null);
    const [nextPokemon, setNextPokemon] = useState(noNextPokemon);
    const [loading, setLoading] = useState(true);

    const getPokemonDetails = () =>{
        pokeList.map((item) =>{
            if(setID > 1 && item.data.id === setID-1 ){
                setPreviewPokemon(item.data)
            }
            if(setID < 906  && item.data.id === setID+1 ){
                setNextPokemon(item.data)
            }
            if(item.data.id === setID){
                setCurrentPokemon(item.data);
            }
            return pokeList;
        })
        setLoading(false);
    }

    const handlePreview = () =>{
        if(setID > 1 ){
            navigate(`/pokemon/${setID -= 1}`)
            getPokemonDetails();
        }
    }
    const handleNext = () =>{
        if(setID < 906){
            navigate(`/pokemon/${setID += 1}`)
            getPokemonDetails();
    }
}
    useEffect(()=>{
        getPokemonDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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