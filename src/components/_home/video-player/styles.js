import styled from 'styled-components';
import ReactPlayer from 'react-player';

export const Container = styled.div`
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex;
  flex-direction: column;
  width: 100%;
  background: clear;
  padding: 8px;
`;

export const Body = styled.div`
  height: auto;
  max-width: 992px;
  width: 90%;
  background: white;
  padding: 8px;
`;

export const Video = styled.div`
  position: relative;
  padding-top: 56.25%;
`;

export const Play = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;
