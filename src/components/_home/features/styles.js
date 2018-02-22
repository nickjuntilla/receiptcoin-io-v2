import styled from 'styled-components';
import media from '../../../constants/media';

export const Container = styled.div`
  height: auto;
  width: 100%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Presenter = styled.div`
  height: auto;
  width: 100%;
  max-width: 992px;
  background: clear;
  border-radius: 4px;
  margin-left: 16px;
  margin-right: 16px;
`;

export const Body = styled.div`
  height: auto;
  width: auto;
  display: flex;
  background: clear;
  flex-direction: column;
  align-items: center;
`;

export const Phone = styled.img`
  width: 42%;
  height: 100%;
  max-height: auto;
  display: flex;
  align-items: flex-end;

  ${media.tablet`
    width: 75%;
  `};
`;

export const Panel = styled.div`
  width: auto;
  height: auto;
  background: clear;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: auto;
  padding: 12px;
`;
