import { BrowserRouter } from "react-router-dom";
import { createContext, useState, useEffect } from "react";

import { GlobalStyle } from './styles';
import { Pages } from "./pages/Pages";
import {getPokemons} from "./api";

export const AppContext = createContext([]);


function App() {

  const [pokeList, setPokeList] = useState([]);

  const getPokemonsData = async()=>{
    setPokeList(await getPokemons());
  }
  useEffect(()=>{
    getPokemonsData();

  },[])

  return (
    <AppContext.Provider value={{pokeList, setPokeList}}>
    <BrowserRouter>
      <Pages/>
    </BrowserRouter>
    <GlobalStyle/>
    </AppContext.Provider>
  );
}

export default App;
