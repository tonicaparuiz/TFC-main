import React from "react";
import { useState } from "react";
import { Card, Button, Form} from 'react-bootstrap';
import image from '../pages/img/logo.png';


/**
 * OJO Esto es para testear sessionStorage
 */
const adminTest = {
  user: "admin",
  pass: "admin",
};

function Login() {
  /**
   * OJO Esto es para testear sessionStorage
   */
  sessionStorage.setItem("usuario", JSON.stringify(adminTest));

  /**
   * Inicializamos useStates 
   */
  const [nombre, setNombre] = useState(null);
  const [pass, setPass] = useState(null);
  /**
   * Parseamos el JSON que nos llega en forma de string del sessionStorage 
   */
  let parsedCredenciales = JSON.parse(sessionStorage.getItem("usuario"));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      nombre === parsedCredenciales.user &&
      pass === parsedCredenciales.pass
    ) {
      document.getElementById("error").textContent = "Buenass";
      alert(`Tu nombre: ${nombre} y tu pass: ${pass}`);
    } else {
      document.getElementById("error").textContent = "Pal piso";
    }
  };

  //sessionStorage.getItem('usuario');
  /**
   * TODO: Intentar usar el componente Forms de React
   *    o crear un componente forms personalizado usando componentes
   */
  return (
    <div>
      <Card className="col-12 col-sm-8 col-md-6 col-lg-3 mx-auto mt-5">
<br/>
<br/>
<div className="text-center mt-3">
        <img src={image} alt="Logo" className="logo-image" />
      </div>  <Card.Body>
    <h2 className="text-center">Inicio de sesión</h2>
    <br/>
    <br/>
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formUsuario">
        <Form.Control
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          name="usuario"
          placeholder="Usuario"
          className="mx-auto"
        />
      </Form.Group>
      <Form.Group controlId="formPassword">
        <Form.Control
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          name="pass"
          placeholder="Contraseña"
          className="mx-auto"
        />
      </Form.Group>
      <br/>
      <div className="d-grid gap-2">
        <Button variant="primary" type="submit">
          Iniciar sesión
        </Button>
      </div>
    </Form>
    <p id="error"></p>
  </Card.Body>
</Card>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
    </div>
  );
}

export default Login;
