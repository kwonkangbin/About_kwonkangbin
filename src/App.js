import React from "react";
import styled from "styled-components";
import Header from "./components/Header/Header.js";

function App() {
  return (
    <Layout>
      <Header />
      <></>
    </Layout>
  );
}

export default App;

const Layout = styled.div`
  display: flex;
  justify-content: center;
`;