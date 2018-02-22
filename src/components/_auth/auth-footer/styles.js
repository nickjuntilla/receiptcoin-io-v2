import styled from 'styled-components';
import media from '../../../constants/media';

export const Container = styled.div`
  height: auto;
  width: 50%;
  color: #999;
  max-width: 600px;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-left: 1em;
  margin-right: 1em;
  flex-wrap: wrap;
  padding: 1em;
  font-size: 14px;

  ${media.tablet`
    width: auto;

  `};
`;
