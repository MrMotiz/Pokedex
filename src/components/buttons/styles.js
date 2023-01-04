import styled from "styled-components";
import {BsFillArrowLeftCircleFill} from "react-icons/bs"

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    width: 65px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    margin: 0px 5px;
`;

export const BackButton = styled(BsFillArrowLeftCircleFill)`
    position: fixed;
    font-size: 30px;
    margin: 10px;
    cursor: pointer;
    color: white;
    :hover{
        color: lightgrey;
    }
`;