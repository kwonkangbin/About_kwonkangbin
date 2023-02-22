import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function LinkButton({
    className,
    to,
    children,
  }){
    if (/^(http|https)/.test(to)) {
        return (
          <Container as="a" className={className} href={to} target="_blank">
            {children}
          </Container>
        );
    }
    
    return (
        <Container className={className} to={to}>
          {children}
        </Container>
    );
}

const Container = styled(Link)`
  width: fit-content;
  display: flex;
  align-items: center;
  padding: 0.5em 1em;
  border-radius: 12px;
  background-color: gray;
  color: white;
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: gray;
  }
`;