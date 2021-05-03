import React from 'react';

import { Container } from './styles';
const Transaction: React.FC = ({children}) => {
  return (
      <Container>
        {children}
      </Container>
  );
}

export default Transaction;