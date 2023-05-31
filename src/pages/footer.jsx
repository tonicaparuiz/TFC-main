import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

    const Footer = () => {
      return (
        <div className="content-wrapper">
      {/* Aquí va el contenido de la página */}
      <footer className="footer bg-dark text-light">
        <div className="footer-content">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h5>Información de contacto</h5>
                <p>Teléfono: +34 666 66 66 66</p>
                <p>Email: info@zapilloit.com</p>
              </div>
              <div className="col-md-6">
                <h5>Síguenos en redes sociales</h5>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="https://www.facebook.com/" className="text-light">
                    <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.twitter.com/" className="text-light">
                    <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.instagram.com/" className="text-light">
                    <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p className="text-center">
              &copy; {new Date().getFullYear()} Zapillo I.T. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
      );
    };

export default Footer;