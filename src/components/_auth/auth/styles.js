import styled from 'styled-components';
import { _blue } from '../../../constants/colors';
import { NavLink } from 'react-router-dom';
import media from '../../../constants/media';

export const Form = styled.form`
  height: auto;
  width: 100%;
  background: white;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 1em;

  ${media.tablet`
    width: auto;
  `};
`;

export const Header = styled.div`
  height: auto;
  border: 1px solid #ececec;
  border-bottom: none;
  border-radius: 4px 4px 0px 0px;
  padding: 8px;
  background: white;
`;

export const Title = styled.div`
  font-size: 24px;
  color: #2a2a2a;
  font-weight: 600;
  margin: 8px;
  font-family: 'Open Sans', sans-serif;
`;

export const Subtitle = styled.div`
  font-size: 16px;
  color: #999;
  margin: 8px;
  font-family: 'Open Sans', sans-serif;
`;

export const Body = styled.div`
  height: auto;
  background: white;
  border: 1px solid #ececec;
  padding: 4px 8px 8px 8px;
`;

export const Footer = styled.div`
  height: auto;
  border: 1px solid #ececec;
  border-top: none;
  border-radius: 0px 0px 4px 4px;
  padding: 8px;
  background: white;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;

export const Submit = styled.button`
  padding: 0.5em 1em;
  font-size: 14px;
  color: white;
  border-radius: 4px;
  border: none;
  background: ${_blue};
  margin: 8px;
  font-family: 'Open Sans', sans-serif;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`;

export const Back = styled(NavLink)`
  padding: 0.5em 1em;
  font-size: 14px;
  color: white;
  border-radius: 4px;
  border: 1px solid #ececec;
  color: #2a2a2a;
  background: white;
  margin: 8px;
  text-decoration: none;
  font-family: 'Open Sans', sans-serif;

  &:hover {
    cursor: pointer;
    background: #fafafa;
  }
`;
