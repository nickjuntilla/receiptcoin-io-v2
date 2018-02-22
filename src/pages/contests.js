// Library imports
import React, { Component } from 'react';

// Relative Imports
import { Page, Body, Section } from '../constants/layout';
import { Heading, Paragraph } from '../constants/type.js';

class Contests extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Page>
        <Body>
          <Section>
            <Heading>Image Content</Heading>
            <Paragraph>
              Only 6 more days until the end of our graphics contest. We need
              some pretty eye candy for our coin! Enter as many times as you
              like. We need depictions of the coin, diagrams or infographics
              based on the white paper
              (https://www.receiptcoin.io/whitepaper.html)
            </Paragraph>
            <Paragraph>
              Post your graphics here in the Telegram channel along with your
              ETH address. First through fifth place will win! We will judge the
              winners here at ReceiptCoin HQ. Contest ends February 9, 10 AM
              Pacific time. All entries will belong to Receipt Coin.
            </Paragraph>
            <Paragraph>Here are the prizes:</Paragraph>
            <Paragraph>1st 1000 RCT </Paragraph>
            <Paragraph>2nd 900 RCT </Paragraph>
            <Paragraph>3rd 800 RCT </Paragraph>
            <Paragraph>4th 700 RCT</Paragraph>
            <Paragraph>RCT 5th 600 RCT</Paragraph>
          </Section>
        </Body>
      </Page>
    );
  }
}

export default Contests;
