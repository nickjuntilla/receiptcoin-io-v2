import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { _blue } from '../../../constants/colors';
import media from '../../../constants/media';

export const Container = styled.div`
  height: 60px;
  width: 100vw;
  background: #f2f1f1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  bottom: 0;
  position: relative;
  border-top: 1px solid #dadada;
  position: fixed;

  ${media.tablet`
    height: auto;
    flex-direction: column;
    align-items: flex-start;
      position: relative;
  `};
`;

export const Icon = styled.img`
  height: 16px;
  width: 16px;
  margin-left: 12px;
`;

export const Section = styled.div`
  height: auto;
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 12px;

  ${media.tablet`
    width: 100%;
    flex-direction: ${props => (props.row ? 'column' : 'column')};
    justify-content:  flex-end;
    margin-top: 8px;
    margin-bottom: 8px;

  `};
`;

export const Social = styled.div`
  height: auto;
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 12px;

  ${media.tablet`
    width: 100%;
    flex-direction: row;
    justify-content: center;
    margin-top: 8px;
    margin-bottom: 8px;
  `};
`;

export const Text = styled.div`
  font-size: 12px;
  text-transform: uppercase;
  color: ${_blue};
  font-family: 'Open Sans', sans-serif;

  ${media.tablet`
    display: none;
  `};
`;

export const Company = styled.div`
  font-size: 12px;
  text-transform: uppercase;
  color: ${_blue};
  font-family: 'Open Sans', sans-serif;
`;

export const Route = styled(Link)`
  font-size: 12px;
  text-transform: uppercase;
  color: ${_blue};
  font-family: 'Open Sans', sans-serif;
  text-decoration: none;
  margin-left: 16px;

  ${media.tablet`
    margin:4px;
  `};
`;
