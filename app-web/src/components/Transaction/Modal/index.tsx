import React  from 'react';
import { Container } from './styles';
const TransactionModal: React.FC = ({children}) => {
  return (
      <Container>
        {children}
      </Container>
  );
}

export default TransactionModal;