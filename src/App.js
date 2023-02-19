import React from "react";
import styled from "styled-components";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Content from "./components/Content/Content.js";
import { Outlet } from 'react-router-dom';

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
  display: flex;
  flex-direction: column;
  width: 100%;
`;