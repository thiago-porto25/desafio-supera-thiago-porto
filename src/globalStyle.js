import { createGlobalStyle } from 'styled-components'

export const globalStyle = createGlobalStyle`
  html, body {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    background-color: #000000;
    color: #333333;
    font-size: 16px;
    margin: 0;

    $light: #f5f8fa;
    $dark: #13171a;
    $lightGrey: #e1e8ed;
    $grey: #aab8c2;
  }
  `
