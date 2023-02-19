import ReactDOM from "react-dom";
import styled, { createGlobalStyle } from "styled-components";

import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";

const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;

    margin: 0;
    padding: 0;

    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    font-size: 20px;
    font-weight: 300;
    line-height: 1.4;
    -webkit-font-smoothing: antialiased;

    @media screen and (max-width: 950px) {
      font-size: 16px;
    }

    * {
      box-sizing: border-box;
    }

    a {
      color: black;
      text-decoration: none;
    }

    p {
      margin: 0;
    }

    h1, h2, h3, h4, h5, h6 {
      margin: 0;
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;

      > li {
        position: relative;
        padding-left: 1.5em;

        &::before {
          content: "";
          position: absolute;
          top: 0.375em;
          left: 0.25em;
          width: 0.375em;
          height: 0.375em;
          border-radius: 50%;
          background-color: gray;
        }
      }
    }
  }
`;

const GlobalWrapper = styled.main`
  position: relative;
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <GlobalWrapper>
          <Header />
          <Content />
          <Footer />
      </GlobalWrapper>
    </>
  );
}