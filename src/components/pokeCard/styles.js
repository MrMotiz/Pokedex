import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: lightblue;
    width: 200px;
    height: 250px;
    border-radius: 20px;
    margin: 10px auto;
    transition:transform 0.25s ease;
    box-shadow: 7.5px 5px 5px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    :hover {
    -webkit-transform:scale(1.25);
    transform:scale(1.25);
    }
`;

export const CardImage = styled.img`
    width: 100%;
    height: 70%;
`;

export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    padding: 5px 10px;
    background: lightseagreen;
    height: 30%;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

`;

export const CardDetailsInfo = styled.div`
    display: flex;
    justify-content:space-between;
    width: 100%;

`;
export const CardText = styled.p`

        font-size: 15px;
`;

export const TypeContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;