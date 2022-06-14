import logo from './logo.svg';
import './App.css';
import { BiHomeAlt } from "react-icons/bi";
import { FaEthereum } from "react-icons/fa";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Main from './Page/Main';
import PageNotFound from './Page/PageNotFound';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Lunacian from './Page/Lunacian';
import Menu from './Page/Menu';
function App() {
  return (
    <BrowserRouter>
 
    <Routes>
      <Route path='/' element={<Main></Main>}></Route>
      <Route path='/Lunacian' element={<Lunacian/>}></Route>
      <Route path='*' element={<PageNotFound />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
