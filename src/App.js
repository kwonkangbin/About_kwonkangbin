import React from "react";
import styled from "styled-components";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Content from "./components/Content/Content.js";

export default function App() {
  return (
    <Layout>
      <Header />
      <Content />
      <Footer />
    </Layout>
  );
}

const Layout = styled.div`
  //position: relative;
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;