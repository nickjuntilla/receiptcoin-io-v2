// Library imports
import React, { Component } from 'react';

// Relative Imports

import { Body, Section } from '../../../constants/layout';
import { Heading, Paragraph } from '../../../constants/type';

class Overview extends Component {
  render() {
    return (
      <div>
        <Body>
          <Section>
            <Heading>Overview</Heading>
            <Paragraph>
              These are the tokens that are used to purchase ReceiptCoin
              services, traded in the app, and used with your ERC20 tools. You will receive your tokens automatically after sending to the sale address.
              There are 250,000,000 Tokens for sale. Distribution will continue until all 250 million are sold.
              We recommend at least 100,000 Gas limit and 15 gwei while sending. If you receive and out of gas limit your gas limit may be too low or there may be no tokens left. We will update this page when that occurs.
              Purchasing ReceiptCoin is not intended to be used for financial
              gain. There are 500,000,000 total ReceiptCoin. The initial sale price is 0.0001 ETH / Token.
            </Paragraph>
          </Section>
          <Section>
            <Heading>Contract Address</Heading>
            <Paragraph>Price: 0.0001 / RC</Paragraph>
            <Paragraph>Currently Distributed: 23%...</Paragraph>
            <Paragraph>Total Supply: 500,000,000</Paragraph>
            <Paragraph>Hard Cap: 250,000,000</Paragraph>
            <Paragraph>Rest: Distributed over 5 years based on market value</Paragraph>
            <Paragraph>Token Watch Address: 0xd6e49800dECb64C0e195F791348C1e87a5864FD7 (receiptcoin.eth)</Paragraph>
            <Paragraph>Symbol: RC(RCT Delta)</Paragraph>
            <Paragraph>Decimals: 9</Paragraph>
            <Paragraph>
              Send Address: 0xb1350342F20DC4ec5D18Db85e827E7c0286AD859
            </Paragraph>
            <Paragraph>
              Maximums and Minimums: No
            </Paragraph>
          </Section>
          <Section>
            <Heading>Warning</Heading>
            <Paragraph>
              <strong>
                Do not send from a Coinbase or Exchange account or you will not
                be able to retrieve your tokens. We recommended
                myetherwallet.com or the official Ethereum wallet.<br /><br /><br /><br /><br />
              </strong>
            </Paragraph>
          </Section>
        </Body>
      </div>
    );
  }
}

export default Overview;
