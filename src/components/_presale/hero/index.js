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
        <Heading>ReceiptCoin Main Token Distribution Event</Heading>
        <Row>
          <Outline>RETURN FEB. 22ND 2:00 PM PST (22:00 UTC)</Outline>
        </Row>
        {/*<Row>
          <Outline>Send 1 ETH</Outline>
          <Outline>Send 10 ETH</Outline>
        </Row>*/}

          <Countdown day="12" hour="53" minute="34" second="52" />

      </Body>
    </Container>
  );
};

export default Hero;
