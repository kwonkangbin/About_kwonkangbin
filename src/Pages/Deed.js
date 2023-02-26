import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";

import catchFashion from "./catch-fashion.md";

const data = [
    {  
      Title: "AZ-900",
      Details: catchFashion,
    },
  ];

export default function Deed(){
    const { Id } = useParams();
    const { Title, Details } = ;
    return (
        <Container>
            <p className="title">{Title}</p>
            <Markdown>{Details}</Markdown>
        </Container>
    );
}   

const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;

  > .title {
    margin: 1.5rem 0 2.5rem;
  }
`;

const Markdown = styled(ReactMarkdown)`
  a {
    color: black;
    font-weight: 500;
    transition: color 0.1s;

    &:hover {
      color: grey;
    }
  }

  ul {
    margin: 0.8rem 0;

    > li {
      margin: 0.4rem 0;
    }
  }
`;
