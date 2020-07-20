import styled, { createGlobalStyle } from 'styled-components';
// @ts-ignore
import BGImage from './images/fundo-quadriculado.png';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background: blue;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    height: 100%;
  }

  body::after {
    content: "";
    background-image: url(${BGImage});
    background-clip: border-box;
    background-size: cover;
    opacity: 0.2;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }

  * {
    box-sizing: border-box;
    font-family: 'Anonymous Pro', monospace;  }

  .footer {
    min-width: 100%;
    padding: 5px 0;
    background: white;
    text-align: center;
    position: relative;
    margin-bottom: -500px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  .box1 {
    margin: 40px auto;
    background: white;
    position: relative;
    top: 30px;
  }

  .box2 {
    background: white;
    border: 5px solid blue;
    position: relative;
    left: 20px;
    bottom: 20px;
  }

  h1 {
    font-size: 3.37rem;
    text-align: center;
    color: blue;
    padding: 20px 30px;
    background: white;
    border: 5px solid blue;
    position: relative;
    left: 20px;
    bottom: 20px;
    margin: 0;
  }

  .start, .next {
    cursor: pointer;
    border: none;
    background: white;
    color: blue;
    height: 40px;
    margin: 40px 0;
    padding: 0 40px;
    :hover {
      opacity: 0.8;
  }

  .start {
    max-width: 200px;
  }
`;
