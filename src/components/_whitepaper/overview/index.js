// Library imports
import React from 'react';

// Relative Imports
import { Container, Heading, SubHeading, Outline, Row } from './styles';
import { Body } from '../../../constants/layout.js';

const Overview = () => {
  return (
    <Container>
      <Body>
        <Heading>Whitepapers</Heading>
        <SubHeading>
          ReceiptCoin provides two versions of its Whitepaper for the community.
        </SubHeading>
        <Row>
          <Outline
            href="https://firebasestorage.googleapis.com/v0/b/receipt-coin-demo.appspot.com/o/Receipt%20Coin%20-%20Whitepaper%20(English).pdf?alt=media&token=58db2a34-bda0-41e8-b9a6-829fd2fecf53"
            download>
            English Whitepaper
          </Outline>
          <Outline
            href="https://firebasestorage.googleapis.com/v0/b/receipt-coin-demo.appspot.com/o/Receipt%20Coin%20-%20Whitepaper%20(Chinese).pdf?alt=media&token=56c4f528-d0aa-48d5-8a8b-80d78f84f805"
            download>
            Chinese Whitepaper
          </Outline>
        </Row>
      </Body>
    </Container>
  );
};

export default Overview;
