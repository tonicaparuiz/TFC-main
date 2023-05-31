import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Información de contacto</h5>
            <p>Teléfono: +1 123 456 789</p>
            <p>Email: info@example.com</p>
          </Col>
          <Col md={6}>
            <h5>Síguenos en redes sociales</h5>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="https://www.facebook.com/">Facebook</a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.twitter.com/">Twitter</a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.instagram.com/">Instagram</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="footer-bottom">
        <Container>
          <p className="text-center">
            &copy; {new Date().getFullYear()} Zapillo I.T. Todos los derechos reservados.
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;