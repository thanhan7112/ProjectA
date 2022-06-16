
import './App.css';
import PageNotFound from './Page/PageNotFound';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Lunacian from './Page/Lunacian';
import Home from './Page/Home';
import Login from './Page/Login';
import Signup from './Page/Signup';
import Logout from './Page/Logout';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Lunacian' element={<Lunacian/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/logout' element={<Logout/>}></Route>
      <Route path='*' element={<PageNotFound />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
