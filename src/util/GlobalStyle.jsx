import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Background from 'assets/image/Background.png';

export const GlobalStyle = createGlobalStyle`
   *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Pretendard-Light';
    line-height: 1.6;
  }
  
`;

export const Layout = styled.div`
  background-image: url(${Background});
  width: 100vw;
  height: 120vh;
  min-width: 420px;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  max-height: 824px;
  color: #333;
`;
