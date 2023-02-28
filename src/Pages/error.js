import React from "react";
import { useRouteError } from "react-router-dom";
import styled from "styled-components";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Error>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </Error>
  );
}

const Error = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    text-align: center;
    flex-direction: column;
    > h1{
        margin-top: 35vh;
    }
    > p{
        margin-top: 20px;
    }
`;