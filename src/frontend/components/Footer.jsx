import React from 'react';
import '../styles/Header.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      <Link to='/terms' className='footer__description'>
        © 2020 Iglesia Cristiana Ekklesia Viva. Todos los derechos reservados.
      </Link>
    </footer>
  );
};

export default Footer;
