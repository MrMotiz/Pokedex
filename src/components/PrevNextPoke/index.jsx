import {PokePreNextContainer, PokeInfoContainer, PokeInfo} from "./styles";
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from "react-icons/bs"


export const PreviewNextPoke = ({prePoke, nextPoke, handlePreview, handleNext}) =>{
    
    return (
        <PokePreNextContainer>
                <PokeInfoContainer onClick={handlePreview}>
                    <BsFillArrowLeftCircleFill style={{fontSize: "25px"}}/>
                    <PokeInfo>
                    <img src={prePoke.sprites.front_default} alt={prePoke.name}/>
                    <h1>{prePoke.name.charAt(0).toUpperCase()+ prePoke.name.slice(1)}</h1>
                    </PokeInfo>
                </PokeInfoContainer>
                <PokeInfoContainer onClick={handleNext}>
                    <PokeInfo>
                    <img src={nextPoke.sprites.front_default} alt={nextPoke.name} />
                    <h1>{nextPoke.name.charAt(0).toUpperCase()+ nextPoke.name.slice(1)}</h1>
                    </PokeInfo>
                    <BsFillArrowRightCircleFill style={{fontSize: "25px"}}/>
                </PokeInfoContainer>
            </PokePreNextContainer>
    )
}