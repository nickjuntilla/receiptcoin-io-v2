// Library imports
import React, { Component } from 'react';

// Relative Imports
import { Container, Presenter, Body } from './styles';
import flowChart from '../../../assets/img/flow-chart.png';
import SectionHeader from '../../_misc/section-header';

class Infographic extends Component {
  render() {
    return (
      <Container>
        <SectionHeader title="Increased Re-Use and Trade" />
        <Presenter>
          <Body src={flowChart} />
        </Presenter>
      </Container>
    );
  }
}

export default Infographic;
