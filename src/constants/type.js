// Type is global typography/fonts that are used everywhere

import styled from 'styled-components';
import { _blue, _grey } from './colors';

export const Heading = styled.h3`
  font-size: 32px;
  color: ${_blue};
  font-weight: bold;
  font-family: 'Open Sans', sans-serif;
`;

export const Paragraph = styled.p`
  font-size: 15px;
  color: ${_grey};
  font-weight: 400;
  font-family: 'Sintony', sans-serif;
  color: ${_grey};
  line-height: 1.42rem;
`;

export const Title = styled.div`
  font-size: 24px;
  color: ${_blue};
  font-weight: bold;
  font-family: 'Open Sans', sans-serif;
`;
