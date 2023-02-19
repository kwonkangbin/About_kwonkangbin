import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Styledheader = styled.header`
    position: fixed;
    top : 10px;
    display: flex;
    align-items: center;
    height: 70px;
    width: 100%;
    max-width: 900px;
    border-radius: 12px;

    &.scrolled {
        background-color: rgba(36, 36, 36, 0.7);
        box-shadow: 0 0 10px rgba(230, 230, 230, 1);
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 30px;
    font-weight: 600;
`;

export const StyledA = styled.a`
    text-decoration: none;
    color: black;
    font-size: 30px;
    font-weight: 500;
`;
