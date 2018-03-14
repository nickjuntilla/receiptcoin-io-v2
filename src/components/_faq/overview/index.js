// Library imports
import React, { Component } from 'react';

// Relative Imports
import { Container } from './styles.js';
import { Body, Section } from '../../../constants/layout';
import { Heading, Paragraph } from '../../../constants/type';

class Overview extends Component {
  render() {
    return (
      <Container>
        <Body>
          <Section>
            <Heading>What’s the total amount of tokens available?</Heading>
            <Paragraph>500m</Paragraph>
          </Section>
          <Section>
            <Heading>What’s the hard cap?</Heading>
            <Paragraph>250m</Paragraph>
          </Section>
          <Section>
            <Heading>What happens to the rest of the tokens?</Heading>
            <Paragraph>The team gets 10%</Paragraph>
            <Paragraph>The rest will be sold slowly over 5 years depending on the cost of creating receipts.</Paragraph>
          </Section>
          <Section>
            <Heading>
              I sent money to the sale. How can I see my tokens??
            </Heading>
            <Paragraph>
              In some apps like Delta (RCT), and imToken (RC) you will see your
              tokens immediately. In others like MyEtherWallet and Ethereum
              Wallet you will need to add the token in the custom token section.
              The token watch address is
              0xd6e49800dECb64C0e195F791348C1e87a5864FD7
            </Paragraph>
          </Section>
          <Section>
            <Heading>How many decimals is ReceiptCoin</Heading>
            <Paragraph>9</Paragraph>
          </Section>
          <Section>
            <Heading>What is the symbol for ReceiptCoin? </Heading>
            <Paragraph>
              On Delta we are currently RCT. On imToken we are RC(ReciptCoin). On
              MyEtherWallet we are RC. What matters is that your root contract is 0xd6e49800dECb64C0e195F791348C1e87a5864FD7
            </Paragraph>
          </Section>
          <Section>
            <Heading>Will there be more airdrops?</Heading>
            <Paragraph>
              We only give airdrops out once to each email/twitter pair.
              Airdrops go out every 4 days or until presale is over.
            </Paragraph>
          </Section>
          <Section>
            <Heading>I didn’t get any tokens for the airdrop</Heading>
            <Paragraph>
              Many people did not fill out both the email and twitter fields or
              inserted an incorrect ethereum address. If it has been more than 4
              days please talk to an admin in the telegram channel. Please do
              not spam the channel. PM us directly.
            </Paragraph>
          </Section>
          <Section>
            <Heading>When is the presale over?</Heading>
            <Paragraph>
              Presale is over at 11:00AM PST on Febrary 15th or until the
              presale reserve runs out.
            </Paragraph>
          </Section>
          <Section>
            <Heading>
              Do I need to register for the token distribution event?
            </Heading>
            <Paragraph>
              Yes, we will start official registration at the end of the
              presale. We will also email the registration information to
              everyone who has subscribed or participated in an airdrop or
              bounty.
            </Paragraph>
          </Section>
          <Section>
            <Heading>
              What will the price of the tokens be during the general sale?
            </Heading>
            <Paragraph>0.0001 ETH / Token</Paragraph>
          </Section>
        </Body>
      </Container>
    );
  }
}

export default Overview;
