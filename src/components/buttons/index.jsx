import { Button, BackButton } from "./styles";
import { useState, useEffect, useRef } from "react";

import {typeColors,typeColorsBorders } from "../../utils/noPokemon"

export const FilterButton = ({name, handleClick})=>{

    const types = Object.keys(typeColors);
    const colors = Object.values(typeColors);
    const borderColors = Object.values(typeColorsBorders);
    const [typeColor, setTypeColor] = useState("");
    const [borderColor, setBorderColor] = useState("");
    const tempColors = useRef();

    const organizeColors = () =>{

        for (let i = 0; i < types.length; i++) {
            if(name.toLowerCase() === types[i]){
                setTypeColor(colors[i])
                setBorderColor(borderColors[i])
            }
        }
    }
    tempColors.current = organizeColors

    useEffect(() => {
        tempColors.current();
    }, []);

        return <Button onClick={handleClick} style={{backgroundColor:typeColor, border:`1px solid ${borderColor}`}}>
            {name.charAt(0).toUpperCase() + name.slice(1)}
            </Button>

}


export const ReturnButton = ({handleClick}) =>{
    return <BackButton onClick={handleClick}/>
}

