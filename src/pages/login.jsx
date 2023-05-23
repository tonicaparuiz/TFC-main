import React from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';



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
    <Card style={{ width: "22rem", height: "27rem" }}
      className="">
      <div className="login-wrapper">
        <br></br>
        <h2>Inicio de sesión</h2>
        <form onSubmit={handleSubmit}>
          <br></br>
          <input
            type="text"
            value={nombre}
            onSubmit={(e) => setNombre(e.target.value)}
            name="usuario"
            placeholder="Usuario"
          />
          <br></br>
          <br></br>
          <label for="pass"></label>
          <input
            type="password"
            value={pass}
            onSubmit={(e) => setPass(e.target.value)}
            name="pass"
            placeholder="Contraseña"
          />
          <br></br>
          <br></br>
          <Button variant="primary" type="submit">
            Iniciar sesión
          </Button>
        </form>
        <p id="error"></p>
      </div>
    </Card>
  );
}

export default Login;
