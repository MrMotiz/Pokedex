import { BrowserRouter } from "react-router-dom";
import { createContext, useState, useEffect } from "react";

import { GlobalStyle } from './styles';
import { Pages } from "./pages/Pages";
import {getPokemons} from "./api";

export const AppContext = createContext([]);


function App() {

  const [pokeList, setPokeList] = useState([]);
  const [unchangePokeList, setUnunchangePokeList] = useState([]);
  
  const getPokemonsData = async()=>{
    const PokePromise = await getPokemons();
    setPokeList(PokePromise);
    setUnunchangePokeList(PokePromise);
  }
  useEffect(()=>{
    getPokemonsData();
  },[])

  return (
    <AppContext.Provider value={{pokeList, setPokeList, unchangePokeList}}>
    <BrowserRouter>
      <Pages/>
    </BrowserRouter>
    <GlobalStyle/>
    </AppContext.Provider>
  );
}

export default App;
