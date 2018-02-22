// Library imports
import React from 'react';

// Relative Imports
import { Container, Title } from './styles';

const SectionHeader = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

export default SectionHeader;
