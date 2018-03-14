// Library imports
import React from 'react';

// Relative Imports
import { Container, Heading, Outline, Row, SubHeading } from './styles';
import { Body } from '../../../constants/layout.js';
import Countdown from '../../_misc/countdown';

const Hero = () => {
  return (
    <Container>
      <Body>
        <Heading>Crowd Sale Address</Heading>
        <Row>
          <Outline>0x33c8421d44824ab2bcc1f1fc3f523f18b0f758d6</Outline>
        </Row>
        <Row>
          <SubHeading>Tokens are sent automatically upon receipt of ETH <br />
          Please do not send directly from exchanges. Use a wallet like<br /> <a target="myetherwallet" href="https://www.myetherwallet.com">MyEtherWallet</a>, imToken, or Delta.</SubHeading>

        </Row>


      </Body>
    </Container>
  );
};

export default Hero;
