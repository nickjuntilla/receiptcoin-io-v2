// Library imports
import React from 'react';

// Relative Imports
import {
  Container,
  Microcopy,
  Heading,
  SubHeading,
  Outline,
  Row
} from './styles';
import Countdown from '../../_misc/countdown';

const Hero = () => {
  return (
    <Container>
      <Microcopy>
        <Heading>Identity of Things</Heading>
        <SubHeading>
          Thanks to the 5,000+ participants in airdrops and pre-sale. The general sale is starting February 22nd. ReceiptCoin is the standard that lets users turn everything into digital, tradeable assets.
        </SubHeading>
        <Row>
          <Outline to="/whitepaper">Download Whitepaper</Outline>
          <Outline to="/register">Feb. 22nd Sale Registration</Outline>
        </Row>
      </Microcopy>
      <Countdown day="12" hour="53" minute="34" second="52" />
    </Container>
  );
};

export default Hero;
