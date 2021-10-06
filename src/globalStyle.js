import { createGlobalStyle } from 'styled-components'

export const globalStyle = createGlobalStyle`

  :root{
    --light: #f5f8fa;
    --lightDarker: #dee1e3;
    --dark: #13171a;
    --lightGrey: #faf2f2;
    --grey: #aab8c2;
  }

  html, body {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    background-color: var(--lightGrey);
    color: var(--dark) ;
    font-size: 16px;
    margin: 0;
  }

  .with-background {
    height: 100vh;
    width: 100%;
    background-image: url('/images/fundo.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: var(--light);
  }
  `
