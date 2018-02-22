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
            title="Registration for Token Distribution"
            subtitle="Register now for the token sale on February 22nd. You will receive a registration code">
            <Input label="Email" type="email" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="Enter your email" />
            <Input label="Country" type="text" name="RCOUNTRY" class="" id="mce-RCOUNTRY" placeholder="Country" />
            <Input
              label="Ethereum Address"
              placeholder="0xb7cB4C...............488F74"
              name="ETHADDRESS" class="" id="mce-ETHADDRESS"
            />
          </Auth>
        </Container>
      </Body>
    );
  }
}

export default Overview;
