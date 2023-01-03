import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from './styles';

import { Pages } from "./pages/Pages";

function App() {
  return (
    <>
    <BrowserRouter>
      <Pages/>
    </BrowserRouter>
    <GlobalStyle/>
    </>
  );
}

export default App;
