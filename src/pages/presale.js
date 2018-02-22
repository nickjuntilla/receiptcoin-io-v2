// Library imports
import React, { Component } from 'react';

// Relative Imports
import { Page } from '../constants/layout';
import Overview from '../components/_presale/overview';
import Hero from '../components/_presale/hero/index.js';

class Presale extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Page>
        <Hero />
        <Overview />
      </Page>
    );
  }
}

export default Presale;
