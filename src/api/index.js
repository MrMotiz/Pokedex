import axios from "axios";

export const getPokemons = async()=>{
    const pokes = [];
    for(let i =1; i < 152; i++){
        pokes.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    const response = await axios.all(pokes.map((item)=>
    axios.get(item)));
    return response;
  }