// Library imports
import React, { Component } from 'react';

// Relative Imports
import { Container, Section, Text, Social, Route, Company } from './styles';
import Icon from '../../_misc/icon';
import Facebook from '../../../assets/icons/facebook.svg';
import Github from '../../../assets/icons/github.svg';
import Medium from '../../../assets/icons/medium.svg';
import Slack from '../../../assets/icons/slack.svg';
import Telegram from '../../../assets/icons/telegram.svg';
import Twitter from '../../../assets/icons/twitter.svg';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      social: [
        { id: 5, src: `${Telegram}`, url: 'https://t.me/receiptcoin' },
        { id: 6, src: `${Twitter}`, url: 'https://twitter.com/receiptcoin' },
        { id: 2, src: `${Github}`, url: 'https://github.com/receiptcoin' },
        { id: 3, src: `${Medium}`, url: 'https://medium.com/@receiptcoin' },
        { id: 4, src: `${Slack}`, url: 'http://bit.ly/2AB6DjO' }
      ]
    };
  }

  renderIcons = () => {
    return this.state.social.map(item => {
      const { src, url, id } = item;
      return <Icon key={id} src={src} url={url} />;
    });
  };

  render() {
    return (
      <Container>
        <Section row>
          <Company>© ReceiptCoin</Company>
          {/* <Route to="/airdrops">Airdrops</Route> */}
          <Route to="/bounties">Bounties</Route>
          <Route to="/contests">Contests</Route>
        </Section>
        <Social>
          <Text>Follow Us</Text>
          {this.renderIcons()}
        </Social>
      </Container>
    );
  }
}

export default Footer;
