import styled from "styled-components";


export const NavigationBar = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10%;
    background: rgb(255,204,0);
    background: linear-gradient(205deg, rgba(255,204,0,1) 0%, rgba(41,113,184,0.8743698162858894) 76%); 
    width: 100%;
    height: 300px;
`;

export const Logo = styled.img`
    max-width: 400px;
`;

export const SearchBar = styled.input`

`;
export const TypesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

export const FilterButton = styled.button`
    height: 300px;
    width: 100px;
`;
