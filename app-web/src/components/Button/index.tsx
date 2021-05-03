import React, {ButtonHTMLAttributes} from 'react';

import { Container } from './styles';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
}
const Button: React.FC<ButtonProps> = ({name, children,...rest}) => {
  return (
    <Container>
      <label htmlFor="cancel" className="sr-only">{name}</label>
      <button {...rest}>{children}</button>
    </Container>
  );
}

export default Button;