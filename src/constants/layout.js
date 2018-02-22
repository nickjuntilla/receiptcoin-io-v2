// Layout are global elements that are used.

import styled from 'styled-components';

// This is the main page component
export const Page = styled.div`
  min-height: calc(100vh - 112px);
  width: 100vw;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 52px;
`;

// This goes in a <Page /> component and helps set max widths on the site.
export const Body = styled.div`
  max-width: 992px;
  width: 100%;
  background: clear;
  height: auto;
  padding: 8px;
  background: clear;
`;

// This is used on text sections like the F.A.Q page
export const Section = styled.div`
  height: auto;
  width: auto;
  margin: 12px;
  background: clear;
`;
