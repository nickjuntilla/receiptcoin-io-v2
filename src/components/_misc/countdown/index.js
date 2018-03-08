// Library imports
import React from 'react';
import Cntdwn from 'react-cntdwn';

// Relative Imports
import { Container, Numeral, Label, Wrapper } from './styles';

const Countdown = ({ day, hour, minute, second }) => {
  return (
    <Container>
        <Numeral>
          <span>0</span><span>0</span><span>0</span><span>0</span>
        </Numeral>
        <Wrapper>
          <Label>Days</Label>
          <Label>Hours</Label>
          <Label>Minutes</Label>
          <Label>Seconds</Label>
        </Wrapper>

    </Container>
  );
};

export default Countdown;
