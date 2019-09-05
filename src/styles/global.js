import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://cdn.rawgit.com/mfd/f3d96ec7f0e8f034cc22ea73b3797b59/raw/856f1dbb8d807aabceb80b6d4f94b464df461b3e/gotham.css');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #EFEFEE;
  }

  a {
    text-decoration: none;
  }

  body, input, button {
    font: 16px 'GothamPro', sans-serif;
  }

  #root {
    width: 100%;
  }

  button {
    cursor: pointer;
  }
`;
