import logo from './logo.svg';
import './App.css';
import Main from './Page/Main';
import PageNotFound from './Page/PageNotFound';
import { BrowserRouter , Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Main></Main>
    <Routes>
      <Route path='/'></Route>
      <Route path='*' element={<PageNotFound />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
