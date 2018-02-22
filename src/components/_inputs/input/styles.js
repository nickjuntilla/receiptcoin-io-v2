import styled from 'styled-components';
import { _border } from '../../../constants/colors';

export const Field = styled.div`
  height: auto;
  background: clear;
  margin: 8px;
  display: flex;
  flex-direction: column;
`;

export const InputField = styled.input`
  height: 40px;
  width: auto;
  font-size: 14px;
  border-radius: 4px;
  padding-left: 16px;
  box-shadow: none;
  border: 1px solid ${_border};

  &:focus {
    border: 1px solid #687bae;
    outline: none;
  }

  &::placeholder {
    text-transform: none;
    font-family: 'Sintony';
    color: #bababa;
  }
`;

export const FormLabels = styled.div`
  height: auto;
  background: clear;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2px;
`;

export const Label = styled.div`
  font-size: 12px;
  color: #999;
  margin-left: 8px;
  font-family: 'Sintony';
`;

export const Error = styled.div`
  font-size: 12px;
  color: #999;
  margin-right: 8px;
`;
