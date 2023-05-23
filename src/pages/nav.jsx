import React from 'react';
import { Card, Container } from 'react-bootstrap';
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
        <Container fluid>
        <Card bg='dark'
        text='light'
        className='menu'
        >
        <Card.Body>
        <nav className='float-start'>
        <img className='d-inline-block align-top' src={logo} alt="Logo" id='logo'/>
        <div id='menu' className='m-0 row justify-content-center '>
        <ul>
          <li>
            <Link to="/" className="menu-link col">Home</Link>
          </li>
          <li>
            <Link to="/login" className="menu-link col">Login</Link>
          </li>
          <li>
            <Link to="/data" className="menu-link col">Datos</Link>
          </li>
        </ul>
        </div>
      </nav>
        </Card.Body>
        </Card>
        </Container>
      <Outlet />
        </>
    );
};


export default Nav;
