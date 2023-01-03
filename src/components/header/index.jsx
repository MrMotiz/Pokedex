import PokemonLogo from "../../utils/assets/pokemon_logo.png";
import {NavigationBar, Logo, SearchBar, TypesContainer} from "./styles";

export const Header = ({handleSearch, children}) => {


  return (
    <NavigationBar>
        <Logo src={PokemonLogo} alt="PokemonLogo" />
        <SearchBar placeholder="Find any Pokemon!" onChange={(e)=> handleSearch(e.target.value)}/>
        <TypesContainer>
        {children}
        </TypesContainer>
    </NavigationBar>
  )
}
