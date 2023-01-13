import { useNavigate } from "react-router-dom";

import { CardContainer, CardImage, CardInfo,CardDetailsInfo, CardText, TypeContainer } from "./styles";
import {FilterButton} from "../buttons"

export const PokeCard = ({data}) =>{

    const navigate = useNavigate();

    return (
        <CardContainer onClick={()=> navigate(`/pokemon/${data.id}`) }> 
            <CardImage src={data.sprites.other["official-artwork"].front_default} alt={data.name} />
            <CardInfo>
                <CardDetailsInfo>
                    <CardText>#{data.id}</CardText>
                    <TypeContainer>
                {data.types.map((item)=>
                    <FilterButton name={item.type.name.charAt(0).toUpperCase() + item.type.name.slice(1)}/> 
                    )}
                    </TypeContainer>
                </CardDetailsInfo>
                <CardText>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</CardText>
            </CardInfo>
        </CardContainer>
    )
}