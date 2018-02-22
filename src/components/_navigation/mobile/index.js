// Library imports
import React from 'react';

// Relative Imports
import { Container, Item, Button } from './styles';

const Mobile = ({ onClick }) => {
  return (
    <Container>
      <Item onClick={onClick} to="/">
        Home
      </Item>
      <Item onClick={onClick} to="/whitepaper">
        Whitepaper
      </Item>
      <Item onClick={onClick} to="/team">
        Team
      </Item>
      <Item onClick={onClick} to="/faq">
        F.A.Q
      </Item>
      <Button onClick={onClick} to="/register">
        Register
      </Button>
    </Container>
  );
};

export default Mobile;
