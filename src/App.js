import React from "react";
import styled from "styled-components";
import Header from "./components/Header/Header.js";
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <Layout>
      <Header />
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  justify-content: center;
  height: 200vh;
`;