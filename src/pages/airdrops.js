// Library imports
import React, { Component } from 'react';

// Relative Imports
import { Page } from '../constants/layout';
import Overview from '../components/_airdrops/overview';

class Airdrops extends Component {
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

export default Airdrops;
