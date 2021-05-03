import React from 'react';

import { 
  Container, 
  Card, 
  AddBalanceIcon, 
  RemoveBalanceIcon, 
  TotalBalanceIcon } from './styles';
  
const Balance: React.FC = () => {

  return (
  <Container>
        <h2 className="sr-only">Balanço</h2>
        <Card>
          <h3>
            <span>Entradas</span>
            <AddBalanceIcon style={{ fontSize: 25 }}/>
          </h3>
          <p>R$ 5.000,00</p>
        </Card>

        <Card>
          <h3>
            <span>Saídas</span>
            <RemoveBalanceIcon style={{ fontSize: 25 }}/>
          </h3>
          <p>R$ 2.000,00</p>
        </Card>

        <Card className="total">
          <h3>
            <span>Total</span>
            <TotalBalanceIcon style={{fontSize: 25}} />
          </h3>
          <p>R$ 3.000,00</p>
        </Card>
  </Container>  
  );
}

export default Balance;