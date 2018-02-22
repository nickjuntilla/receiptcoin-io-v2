import styled from 'styled-components';
import { _border } from '../../../constants/colors';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: pink;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Presenter = styled.div`
  height: 500px;
  width: 100%;
  max-width: 992px;
  background: white;
  border-radius: 4px;
  margin-left: 16px;
  margin-right: 16px;
`;

export const Body = styled.div`
  height: 90%;
  width: auto;
  display: flex;
  background: clear;
  padding: 16px;
`;

export const Footer = styled.div`
  height: 10%;
  width: auto;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  border-top: 1px solid ${_border};
`;
