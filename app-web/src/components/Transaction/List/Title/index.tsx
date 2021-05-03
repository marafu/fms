import React from 'react';

import { Container } from './styles';

interface ITitle {
  titleOne: string;
  titleTwo?: string;
  titleThree?: string;
}

const Title: React.FC<ITitle> = ({titleOne, titleTwo, titleThree}) => {
  return (
    <Container>
      <tr>
        <th>{titleOne}</th>
        {titleTwo && <th>{titleTwo}</th>}
        {titleThree && <th>{titleThree}</th>}
        <th></th>
      </tr>
    </Container>
  );
}

export default Title;