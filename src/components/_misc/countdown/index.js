// Library imports
import React from 'react';
import Cntdwn from 'react-cntdwn';

// Relative Imports
import { Container, Numeral, Label, Wrapper } from './styles';

const Countdown = ({ day, hour, minute, second }) => {
  return (
    <Container>
        <Numeral>
          <Cntdwn
          targetDate={new Date('2018-02-22 14:00:00')}
          startDelay={0}
          interval={1000}
          format={{hour: 'HH', minute: 'MM',second: 'SS',day: 'DD'}}
          timeSeparator={' '}
          leadingZero
          />
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
