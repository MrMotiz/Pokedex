import axios from "axios";
import { useState, useEffect } from "react";

import { Header, PokeCards } from "../components"
import { PokeCard } from "../components/pokeCard";
import {FilterButton} from "../components/buttons";
import {Loading} from "../components/loading";

export const Home = () =>{

    const pokeGens = [152, 252, 387, 494, 650, 810];
    const [pokemons, setPokemons] = useState([])
    const [types, setTypes] = useState([])
    const [loading, setLoading] = useState(true);
    
    const getPokemons = async(pokeGens)=>{
        const pokes = [];
        for(let i =1; i < pokeGens[0]; i++){
            pokes.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        const response = await axios.all(pokes.map((item)=>
        axios.get(item)));
        setPokemons(response);
        setLoading(false);
    }
    
    const getTypes = async()=>{
        const response = await axios.get(`https://pokeapi.co/api/v2/type?limit=20/`);
        setTypes(response.data.results);
    }
    const handleSearch = (value) =>{
        if(!value.length) return getPokemons();
        const filteredPokemons = pokemons.filter((item)=>
        item.data.name.toLowerCase().includes(value.toLowerCase()));
        
        if(filteredPokemons.length > 0){
            setPokemons(filteredPokemons);
        } else{
            setPokemons(pokemons);
        }
    }
    
    const handleClick = () =>{
        for (let i = 0; i < types.length; i++) {            
            //console.log(types[i].name);
        }
        
    }
    useEffect(()=>{
        getTypes();
        getPokemons(pokeGens);
        console.log(pokemons)
    }, [])
    return (
        <>
    <Header handleSearch={handleSearch}>
        {types.map((item, count)=>
            <FilterButton key={count} name={item.name} handleSearch={handleClick}/>
        )}

    </Header>
    <PokeCards>
        {loading ? 
        <Loading/> :
        pokemons.map((item) => 
                        <PokeCard key={item.data.id} data ={item.data}/>
                        )}
    </PokeCards>

    </>
    )
}
