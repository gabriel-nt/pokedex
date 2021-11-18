import { createGlobalStyle } from 'styled-components';

import 'swiper/css/bundle';

export default createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  button {
    border: none;
    cursor: pointer;
  }

  body {
    color: #fff;
    width: 100%;
    height: 100vh;
    background-color: #f1f1f1;
  }

  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
  }

  p {
    font-size: 16px;
    line-height: 140%;
    letter-spacing: 1px;
  }
`;
