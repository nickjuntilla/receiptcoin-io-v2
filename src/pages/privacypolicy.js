// Library imports
import React, { Component } from 'react';

// Relative Imports
import { Page, Body } from '../constants/layout';
import Overview from '../components/_privacypolicy/overview';

class Faq extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Page>
        <Body>
          <Overview />
        </Body>
      </Page>
    );
  }
}

export default Faq;
