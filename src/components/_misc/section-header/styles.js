import styled from 'styled-components';
import { Heading } from '../../../constants/type';

export const Container = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
  padding-right: 16px;
`;

export const Title = styled(Heading)`
  margin-left: 12px;
  margin-right: 12px;
  text-align: center;
`;
