import React from 'react';

import { Container } from './styles';

const Footer: React.FC = () => {
  function getYear() {
    let today = new Date();
    return today.getFullYear();
  }
  return (
    <Container>
      <p>FMS - Created by Matheus Assis - {getYear()}</p>
    </Container>
  );
}

export default Footer;