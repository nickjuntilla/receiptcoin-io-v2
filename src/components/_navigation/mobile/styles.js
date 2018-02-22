import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { _blue } from '../../../constants/colors';

export const Container = styled.div`
  height: auto;
  width: 100%;
  background: ${_blue};
  position: absolute;
  margin-top: 52px;

  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const Item = styled(Link)`
  color: white;
  font-size: 14px;
  padding: 8px;
  text-decoration: none;
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
`;

export const Button = styled(Link)`
  color: {_blue};
  font-size: 14px;
  width: auto;
  background: white;
  margin: 8px;
  padding: 8px;
  text-decoration: none;
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${_blue};
  }

  &:visited {
    color: ${_blue};
  }
`;
