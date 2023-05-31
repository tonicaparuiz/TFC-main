import React from "react";
import { Card } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import WebImg from '../pages/img/web_img.jpg';
import apiImg from '../pages/img/apiImg.png';
import lectorImg from '../pages/img/FO90H03JF2SVQQZ.jpg';


function Home() {
  return (
    <>
      <div id="wrapper">
        <Card className="col-11 col-sm-11 col-md-11 col-lg-11 mx-auto mt-5">
        <Row>
        <Col xs={12}>
        <Card>
          <Card.Header className="float-left">
            <Card.Title>
              <h1>Introducción</h1>
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <p>La idea principal de nuestro proyecto es gestionar la entrada de las puertas de propiedades de un usuario mediante un lector RFID y un motor asociado a la cerradura de la puerta. 
              Con esto conseguimos eliminar las varias llaves que tendrá el usuario y sustituir todas estas por una única y exclusiva tarjeta para cada miembro de la casa. 
              Dentro de la funcionalidad de este proyecto el usuario puede modificar, eliminar y añadir usuarios a su propiedad como él necesite, 
              para ello tendrá un panel de administrador con acceso donde podrá comprobar los usuarios dados de alta a la propiedades a su nombre y gestionar estos viendo su fecha de entrada.</p>
          </Card.Body>
        </Card>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
        <Col lg={4}
        xs={12}>
        <Card>
          <Card.Header className="float-left">
          <Card.Img variant="top" src={apiImg} />
          </Card.Header>
          <Card.Body>
          <Card.Title>
              Parte Back-end
            </Card.Title>
            <Card.Text>La parte back-end, esta formada por un servicio web, el cual está conectado con una base de datos y se encarga de gestionar la información solicitada por parte del front-end</Card.Text>
          </Card.Body>
        </Card>
          </Col>
          <Col lg={4}
        xs={12}>
        <Card>
          <Card.Header className="float-left">
          <Card.Img variant="top" src={WebImg} />
          </Card.Header>
          <Card.Body>
          <Card.Title>
          Parte Front-end
            </Card.Title>
            <Card.Text>Se encarga de mostrar los datos de la forma más intuitiva para el cliente. </Card.Text>
          </Card.Body>
        </Card>
          </Col>
          <Col lg={4}
        xs={12}>
        <Card>
          <Card.Header className="float-left">
          <Card.Img variant="top" src={lectorImg} />
          </Card.Header>
          <Card.Body>
          <Card.Title>
          Parte Física
            </Card.Title>
            <Card.Text>Se encarga mediante el ESP32 y el cableado interno de solicitarle información a la API REST y una vez obtenida la respuesta abrir o cerrar la puerta.</Card.Text>
          </Card.Body>
        </Card>
          </Col>
        </Row>
        </Card>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    </>
  );
}

export default Home;
