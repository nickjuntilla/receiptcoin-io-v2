import styled from 'styled-components';
import { _border, _grey, _blue } from '../../../constants/colors';
import media from '../../../constants/media';

export const Wrapper = styled.div`
  width: 100%;
  background: clear;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 60px;
`;

export const Container = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-wrap: wrap;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Card = styled.div`
  height: auto;
  width: auto;
  border-radius: 4px;
  border: 1px solid ${_border};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  min-width: 300px;
  margin: 0.83%;
  flex-basis: 0;
  background: white;
  max-width: 48%;
  text-decoration: none;
  transition: 300ms;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  ${media.mobile`
    max-width: 100%;
    margin: 12px;
  `};
  ${media.tablet`
    max-width: 100%;
    margin: 12px;
  `};
`;

export const LinkedIn = styled.a`
  height: 40px;
  width: 100%;
  background: ${_blue};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  color: white;
  font-family: 'Open Sans', sans-serif;
  text-decoration: none;
  font-size: 14px;
`;

export const Avatar = styled.img`
  height: 80px;
  width: 80px;
  background: #f9f9f9;
  border-radius: 50%;
  margin: 16px;
  object-fit: cover;
`;

export const Name = styled.div`
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  margin-top: 16px;
  color: ${_blue};
`;

export const Position = styled.div`
  font-size: 15px;
  font-family: 'Open Sans', sans-serif;
  color: ${_grey};
`;

export const Description = styled.div`
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  margin-top: 16px;
  color: ${_grey};
`;

export const Row = styled.div`
  background: clear;
  height: 80px;
  display: flex;
  align-items: center;
  margin-top: 60px;
  margin: 8px;
`;
