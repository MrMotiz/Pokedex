import {Routes, Route} from "react-router-dom";


import {Home} from "./Home";
import {Details} from "./Details";


export const Pages = () =>{
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/pokemon/:id" element={<Details/>}/>
        </Routes>
    )
}