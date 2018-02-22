import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  width: 100%;
  background: clear;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Open Sans', sans-serif;
  padding: 16px;
  flex-direction: column;
`;

export const Numeral = styled.div`
  font-size: 40px;
  color: white;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  span {
    padding: 8px;
  }
`;

export const Label = styled.div`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  padding: 10px;
`;

export const Wrapper = styled.div`
  height: auto;
  width: auto;
  margin: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
