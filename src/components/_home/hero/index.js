// Library imports
import React from 'react';

// Relative Imports
import {
  Container,
  Microcopy,
  Heading,
  SubHeading,
  Outline,
  Row,
  Video,
  Play
} from './styles';
import Countdown from '../../_misc/countdown';

const Hero = () => {
  return (
    <Container>
      <Video>
        <Play
          url="https://youtu.be/ss8DA5_BTro"
          className="react-player"
          width="100%"
          height="100%"
        />
      </Video>
    </Container>
  );
};

export default Hero;
