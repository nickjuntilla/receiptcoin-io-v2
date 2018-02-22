// Library imports
import React, { Component } from 'react';

// Relative Imports
import { Page, Body, Section } from '../constants/layout';
import { Heading, Paragraph } from '../constants/type.js';

const iframe = '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScC3CIL-ecMREPyMKpTUYIbKiwMLioWewsda4MrBDpD6CVy4A/viewform?embedded=true#responses" width="540" height="1050"></iframe>';


class Bounties extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  iframe() {
    return {
      __html: iframe
    }
  }


  render() {
    return (
      <Page>
        <Body>
          <Section>

            <Heading>Bounty Referral Program</Heading>
            <Paragraph>
              This campaign will run for 30 days or until we hit 30k followers
              on either platform! Here’s how it works:
            </Paragraph>
            <Paragraph>
              1. Existing users refer new users to Twitter and/or Telegram
            </Paragraph>
            <Paragraph>
              2. New users follow/join and complete the steps below
            </Paragraph>
            <Paragraph>
              3. Both new and referring users complete the form below
            </Paragraph>
            <Paragraph>
              4. Once the campaign ends in 30 days or when we hit 30k followers,
              whichever comes first, we will review all submissions and disburse
              ReceiptCoin to the new and referring users.
            </Paragraph>
            <Paragraph>
              5. New users will receive 10 ReceiptCoin for following us on
              Twitter and/or 10 ReceiptCoin for becoming a member of our
              Telegram channel.
            </Paragraph>
            <Paragraph>
              6. Referring users will receive 10 ReceiptCoin for each new member
              they refer. There are no limits to this, however if we suspect
              activity from a bot or any fictitious accounts, we will not allow
              those entries.
            </Paragraph>
            <Paragraph>
              It’s so easy a caveman could do it! For any questions, please DM
              Joseph Schmitt(@thechepito) on Telegram
            </Paragraph>
          </Section>
        </Body>

        <Body>
          <Section>
            <Heading>Twitter Referral Program</Heading>
            <Paragraph>
              New user follows @receiptcoin on twitter and retweets the
              @receiptcoin tweet (below), including the following message and
              the ‘twitter’ username of the person who referred them.
            </Paragraph>
            <Paragraph>New followers retweet of @receiptcoin tweet</Paragraph>
            <Paragraph>
              <strong>
                “So excited to be a part of the ReceiptCoin community! Thanks
                for the referral @username” (twitter username of person who
                referred you)
              </strong>
            </Paragraph>
            <Paragraph>Original tweet from @receiptcoin</Paragraph>
            <Paragraph>
              <em>
                “ReceiptCoin 50% off sale until Feb 15th! General sale begins
                Feb22nd. Buy here http://receiptcoin.io/buy Join the community
                on Telegram http://t.me/receiptcoin and here on Twitter
                @receiptcoin” New and referring users complete the form and
                provide required info. Telegram
              </em>
            </Paragraph>
            <Paragraph>
              New users join our telegram channel and post the following:
            </Paragraph>
            <Paragraph>
              <em>
                “So excited to be a part of the ReceiptCoin community! Thanks
                for the referral @username”
              </em>
            </Paragraph>
          </Section>
        </Body>
        <div dangerouslySetInnerHTML={ this.iframe() } />
      </Page>
    );
  }
}

export default Bounties;
