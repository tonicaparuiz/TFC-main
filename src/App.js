
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//import { useState } from 'react';
import Navegacion from './pages/nav'
import Home from './pages/home'
import Login from './pages/login'
import Data from './pages/data';
import Notfound from './pages/notfound';
import Teapot from './pages/teapot';
import Footer from './pages/footer';

function App() {
  
  /*
    Se supone que hay que enrutar contra un login con token verificado,
    eso se suele hacer con un nodejs express con modulo CORS que carga la petición
    y devuelve un clave-valor del token utilizado.
    
  const [token,setToken] = useState();

  if(!token) {
    return <Login setToken={setToken}/>
  }*/

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navegacion/>}>
            <Route index element={<Home/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='data' element={<Data/>}/>
            <Route path='*' element={<Notfound/>}/>
            <Route path='teapot' element={<Teapot/>}/>
            <Route path='/' element={<Footer/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
