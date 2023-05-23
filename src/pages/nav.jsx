import React from 'react';
import { Card } from 'react-bootstrap';
import {Outlet, Link} from 'react-router-dom';
import logo from '../pages/img/logo.png';

  /*
    Usamos los componentes Outlet y Link de react-router-dom para conseguir 
    el enrutado de las vistas dentro de un componente padre.
    - Link: Permite enrutar mediante el atributo 'to'.
    - Outlet: Permite anidar componentes de interfaz de usuario, 
        es decir, sirve para renderizar elementos hijos de este componente.
  */

function Nav () {
    return (
        <>
        <Card bg='dark'
        text='light'>
        <Card.Body >
        <nav>
        <img src={logo} width="70" height="70" alt="Logo" id='logo'/>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/data">Datos</Link>
          </li>
          <li>
            <Link to="/notfound">Not Found Test</Link>
          </li>
        </ul>
      </nav>
        </Card.Body>
        </Card>
      <Outlet />
        </>
    );
};


export default Nav;
