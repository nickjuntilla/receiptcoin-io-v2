// Library imports
import React from 'react';

// Relative Imports
import { Container, Heading, Outline, Row } from './styles';
import { Body } from '../../../constants/layout.js';
import Countdown from '../../_misc/countdown';

const Hero = () => {
  return (
    <Container>
      <Body>
        <Heading>Sale Address</Heading>
        <Row>
          <Outline>0xb1350342F20DC4ec5D18Db85e827E7c0286AD859</Outline>
        </Row>
        <Row>
          <Outline>Tokens are sent automatically upon receipt of ETH <br />
          Please do not send from exchanges</Outline>
        </Row>


      </Body>
    </Container>
  );
};

export default Hero;
