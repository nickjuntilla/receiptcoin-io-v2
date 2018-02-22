import styled from 'styled-components';
import { _blue } from '../../../constants/colors';
import media from '../../../constants/media';

export const Container = styled.div`
  height: 300px;
  width: 100vw;
  background: ${_blue};
  display: flex;
  align-items: center;
  justify-content: center;
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
  max-width: 500px;
  display: flex;
`;

export const Outline = styled.a`
  height: 48px;
  width: 100%;
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

  ${media.mobile`
    font-size: 13px;
  `};
`;
