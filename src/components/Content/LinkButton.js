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
    else{
      return (
        <Container className={className} to={to}>
          {children}
        </Container>
      );
    }
}

const Container = styled(Link)`
  width: fit-content;
  display: flex;
  align-items: center;
  padding: 0.6em 1em;
  border-radius: 10px;
  background-color: rgba(85, 87, 110, 0.15);
  color: black;
  text-decoration: none;
  transition: background-color 0.2s;
  margin: 15px 0 0 20px;

  &:hover {
    background-color: rgba(85, 87, 110, 0.32);
  }
`;