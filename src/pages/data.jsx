import React from "react";
import Axios from "axios";
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';


const BaseURL =
  "http://venomrp.ddns.net:2723/Test/access?id=2&rfidCode=04%20D8%2016%208E%201E%2056%2081";

function Data() {
    /**
     * Usamos el hook useState para setear y almacenar el estado de los datos
     */
  const [datos, setDatos] = React.useState(null);
    /**
     * Utilizamos Axios para realizar una petición get a la URL anterior, al resolver la promesa, se devuelve un JSON asociado al ID y código rfid
     */
  React.useEffect(() => {
    Axios.get(BaseURL).then((res) => {
      setDatos(res.data);
    });
  }, []);

  if (!datos) return null;

  return (
   <Card style={{margin:"100px"}}
   className="text-center">
     <div>
    {/**
        Pintamos el nombre de usuario y el rfid obtenidos de la petición
     */}
     <Card.Title
     variant="primary"
     text="light"
     >
      <h1>{datos.NombreUsuario.toUpperCase()}</h1>
     </Card.Title>
     <Card.Text>
     <small>{datos.RFID}</small>
     </Card.Text>
     <Card.Body>
     <Table striped bordered hover size="sm">
      <tbody>
      <tr>
          <th>ID</th>
          <th>Dirección</th>
          <th>Código Postal</th>
          <th>Ciudad</th>
        </tr>
      </tbody>
        
        {/**
            Iteramos los datos del objeto que nos llega en JSON para obtener cada clave-valor y pintarlo
         */}
         <tbody>
         {datos.CasasAsociadas.map((valor, index) => {
          return (
            <tr key={index}>
              <td>{valor.id}</td>
              <td>{valor.Direccion}</td>
              <td>{valor.CodigoPostal}</td>
              <td>{valor.Ciudad}</td>
            </tr>
          );
        })}
         </tbody>
      </Table>
     </Card.Body>
    </div>
   </Card>
  );
}

export default Data;
