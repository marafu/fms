import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';

import { Container, RemoveTransactionIcon } from './styles';

interface ItemProps {
  id: string;
  description: string;
  type: string;
  date: Date;
  amount: number;
}

const Item: React.FC<ItemProps> = ({id, description, type, date, amount }) => {
  const [real, setReal] = useState('')
  const removeItem = useCallback(async () => {
    const url = `http://localhost:8888/api/v1/transactions/${id}`
    const response = await axios.get(url)
    console.log(response.data)
    window.location.reload()
  }, [id])

  useEffect(() => {
    const real = amount.toLocaleString("pt-BR", {
      style: 'currency',
      currency: 'BRL'
    })
    console.log(real)
    setReal(real)

  }, [amount, date])
  return (
    <Container> 
      <tr key={id}>
        <td className="description">{description}</td>
        <td className={type}>{real}</td>
        <td className="date">{date}</td>
        <td>
          <button onClick={removeItem}>
            <RemoveTransactionIcon  style={{fontSize: 20}} />
          </button>
        </td>
      </tr>
    </Container>
  );
}

export default Item;