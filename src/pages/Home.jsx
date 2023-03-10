import axios from "axios";
import { useState, useEffect, useContext } from "react";

import { Header, PokeCards } from "../components"
import { PokeCard } from "../components/pokeCard";
import {FilterButton} from "../components/buttons";
import {Loading} from "../components/loading";
import { AppContext } from "../App";

export const Home = () =>{


    const {pokeList, setPokeList, unchangePokeList} = useContext(AppContext);
    // const pokeGens = [152, 252, 387, 494, 650, 810];
    const [types, setTypes] = useState([])
    const [loading, setLoading] = useState(true);
    
    const getTypes = async()=>{
        const response = await axios.get(`https://pokeapi.co/api/v2/type?limit=20/`);
        setTypes(response.data.results);
    }

    const handleSearch = (value) =>{
        setPokeList(unchangePokeList);
        const filteredPokemons = pokeList.filter((item)=>
        item.data.name.toLowerCase().includes(value.toLowerCase()));

        if(!value) return setPokeList(unchangePokeList);

        setPokeList(filteredPokemons);
    }
    
    const handleClick = (type) =>{
        const typesOfPokes = [];
            for (let p = 0; p < pokeList.length; p++) {
                if(pokeList[p].data.types[0].type.name === type || 
                    pokeList[p].data.types[1]?.type.name === type){
                    typesOfPokes.push(pokeList[p]);
                }
            }
            setPokeList(typesOfPokes)
        }
   
    useEffect(()=>{
        getTypes();
        setLoading(false);
    }, [])

    return (
        <>
    <Header handleSearch={handleSearch}>
        {types.map((item, count)=>
            <FilterButton key={count} name={item.name} handleClick={()=> handleClick(item.name)}/>
        )} <FilterButton name="Reset" handleClick={()=> setPokeList(unchangePokeList)}/>

    </Header>
    <PokeCards>
        {loading ? 
        <Loading/> :
        pokeList.map((item) => 
                        <PokeCard key={item.data.id} data ={item.data}/>
                        )}
    </PokeCards>

    </>
    )
}
