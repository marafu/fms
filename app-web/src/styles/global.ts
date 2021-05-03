import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
  }

  html {
    font-size: 93.75%;
  }

  body {
    font-size: 14px;
    background-color: #121214;
    color: #e1e1e6;
    font-family: 'Roboto', sans-serif;
  }
  
  button, input, textarea {
    border: none;
    outline: none;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
    border-width: none;
  }

  @media(min-width: 800px) {
    html{
      font-size: 83.5%;
    }
  }
`