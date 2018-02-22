import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { _blue } from '../../../constants/colors';
import media from '../../../constants/media';

const activeClassName = 'selected';

export const Container = styled.div`
  height: 52px;
  width: 100%;
  background: ${_blue};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1000;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Brand = styled(Link)`
  width: auto;
  height: auto;
  margin: 8px;
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const Company = styled.div`
  font-size: 1em;
  font-weight: bold;
  margin-left: 12px;
  color: white;
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
`;

export const Icon = styled.img`
  height: 32px;
  width: 32px;
`;

export const Button = styled(Link)`
  padding: 0.5em 1em;
  font-size: 14px;
  border-radius: 4px;
  background: white;
  margin-left: 8px;
  text-decoration: none;
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
  border: none;
  color: ${_blue};
`;

export const Item = styled(NavLink).attrs({
  activeClassName
})`
  color: rgba(255, 255, 255, 0.4);
  font-size: 14px;
  margin-left: 8px;
  margin-right: 8px;
  text-decoration: none;
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;

  &.${activeClassName} {
    color: rgba(255, 255, 255, 1);
  }
`;

export const ButtonContainer = styled.div`
  width: auto;
  height: auto;
  margin: 8px;

  ${media.tablet`
    display: none;
  `};
`;

export const Hamburger = styled.div`
  height: 32px;
  width: 32px;
  background: clear;
  margin-right: 12px;
  background: clear;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  display: none;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  ${media.desktop`
    display: none;

  `};

  ${media.laptop`
    display: none;
  `};

  ${media.tablet`
    display: inline;
    display: flex;
    align-items: center;
    justify-content: center;
  `};
`;

export const Menu = styled.img`
  height: 16px;
  width: 16px;
  background: clear;
`;
