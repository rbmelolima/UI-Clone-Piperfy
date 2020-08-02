import React from 'react';
import { Container, Label } from './styles';

export default function Card( { data } ) {
  return (
    <Container>
      <header>
        {
          data.labels.map( ( label, index ) => <Label color={ label } key={ index } /> )
        }
      </header>
      <p> { data.content } </p>
      {
        data.user && <img src={ data.user } alt="Perfil do usuário" />
      }
    </Container>
  );
}
