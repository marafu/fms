import React from 'react';

import { Container } from './styles';
interface InputInterface {
  type: string;
  id: string;
  name: string;
  placeholder: string;
  description: string;
}

const Input: React.FC<InputInterface> = ({type, id, name, placeholder, description}) => {
  return (
    <Container>
        <label htmlFor={id} className="sr-only">{description}</label>
        <input 
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}  
        />
    </Container>
  );
}

export default Input;