import { createGlobalStyle } from 'styled-components'

export const globalStyle = createGlobalStyle`

  :root{
    --light: #f5f8fa;
    --dark: #13171a;
    --lightGrey: #e1e8ed;
    --grey: #aab8c2;
  }

  html, body {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    color: var(--light);
    font-size: 16px;
    margin: 0;
  }
  `
