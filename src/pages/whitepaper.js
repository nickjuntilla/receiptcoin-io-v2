// Library imports
import React, { Component } from 'react';

// Relative Imports
import { Page } from '../constants/layout';
import Overview from '../components/_whitepaper/overview';

class Bounties extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Page>
        <Overview />
      </Page>
    );
  }
}

export default Bounties;
