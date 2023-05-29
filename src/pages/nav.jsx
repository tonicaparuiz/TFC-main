import React from 'react';
import {Outlet} from 'react-router-dom';
import logo from '../pages/img/logo.png';
import { Container, Row, Col, Card, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

  /*
    Usamos los componentes Outlet y Link de react-router-dom para conseguir 
    el enrutado de las vistas dentro de un componente padre.
    - Link: Permite enrutar mediante el atributo 'to'.
    - Outlet: Permite anidar componentes de interfaz de usuario, 
        es decir, sirve para renderizar elementos hijos de este componente.
  */

function Menu () {
    return (
        <>
        <Container fluid>
  <Row xs={12}>
    <Card bg="dark" text="light" className="menu">
      <Card.Body>
        <Row className="align-items-center">
          <Col xs={12} sm={3} md={2} lg={1}>
            <img className="d-inline-block align-top" src={logo} alt="Logo" id="logo" />
          </Col>
          <Col xs={12} sm={8} md={9} lg={10}>
            <Nav  variant="tabs" className="justify-content-start">
              <Nav.Item>
                <Link to="/" className="nav-link">Home</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/login" className="nav-link">Login</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/data" className="nav-link">Datos</Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  </Row>
</Container>
      <Outlet />
        </>
    );
};


export default Menu;
