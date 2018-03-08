import styled from 'styled-components';
import { _blue } from '../../../constants/colors';
import media from '../../../constants/media';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

export const Container = styled.div`
  width: 100vw;
  height: 75vh;
  background: ${_blue};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Microcopy = styled.div`
  max-width: 992px;
  height: 100%;
  width: 100%;
  display: flex;
  background: clear;
  justify-content: center;
  flex-direction: column;
  padding: 12px;

  ${media.mobile`
    margin: 16px;
  `};
`;

export const Heading = styled.div`
  font-size: 44px;
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  margin: 8px;
`;

export const SubHeading = styled.div`
  font-size: 16px;
  color: white;
  font-family: 'Sintony', sans-serif;
  font-weight: 400;
  width: 45%;
  margin: 8px;

  ${media.mobile`
    width: 100%;
  `};

  ${media.tablet`
    width: 100%;
    max-width: 500px;

  `};
`;

export const Row = styled.div`
  height: auto;
  width: auto;
  display: flex;
  flex-direction: row;
  margin: 8px;

  ${media.tablet`
    flex-direction: column;
  `};
`;

export const Fill = styled.div`
  height: 48px;
  width: 182px;
  font-size: 16px;
  background: white;
  color: ${_blue};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin: 4px;
  font-family: 'Sintony', sans-serif;

  &:hover {
    cursor: pointer;
  }
`;

export const Outline = styled(Link)`
  height: 48px;
  width: auto;
  font-size: 16px;
  background: ${_blue};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin: 4px;
  border: 1px solid white;
  font-family: 'Sintony', sans-serif;
  padding-left: 12px;
  padding-right: 12px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

export const Video = styled.div`
  width:93%;
  height:85%;
  position: relative;
`;

export const Play = styled(ReactPlayer)`

`;
