// Library imports
import React, { Component } from 'react';

// Relative Imports
import { Container } from './styles.js';
import { Body } from '../../../constants/layout';
import Auth from '../../_auth/auth';
import Input from '../../_inputs/input';

class Overview extends Component {
  render() {
    return (
      <Body>
        <Container>
          <Auth
            title="Airdrop "
            subtitle="Provide your contact details to be eligible for Airdrops">
            <Input label="Email" placeholder="Enter your email" />
            <Input label="Twitter" placeholder="Enter your handle" />
            <Input
              label="Ethereum Address"
              placeholder="0xb7cB4C...............488F74"
            />
          </Auth>
        </Container>
      </Body>
    );
  }
}

export default Overview;
