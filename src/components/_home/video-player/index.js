// Library imports
import React, { Component } from 'react';

// Relative Imports
import { Container, Body, Video, Play } from './styles';

class VideoPlayer extends Component {
  render() {
    return (
      <Container>
        <Body>
          <Video>
            <Play
              url="https://youtu.be/ss8DA5_BTro"
              className="react-player"
              width="100%"
              height="100%"
            />
          </Video>
        </Body>
      </Container>
    );
  }
}

export default VideoPlayer;
