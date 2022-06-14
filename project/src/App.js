
import './App.css';
import PageNotFound from './Page/PageNotFound';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Lunacian from './Page/Lunacian';
import Home from './Page/Home';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Lunacian' element={<Lunacian/>}></Route>
      <Route path='*' element={<PageNotFound />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
