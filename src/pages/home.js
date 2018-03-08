// Library imports
import React, { Component } from 'react';

// Relative Imports
import { Page } from '../constants/layout';
import Hero from '../components/_home/hero';
import VideoPlayer from '../components/_home/video-player';
import Infographic from '../components/_home/infographic';
import Features from '../components/_home/features';

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Page>
        <Hero />
        <Infographic />
        <Features />
      </Page>
    );
  }
}

export default Home;
