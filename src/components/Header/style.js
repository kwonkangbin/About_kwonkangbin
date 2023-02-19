import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Styledheader = styled.header`
    position: fixed;
    top : 10px;
    z-index: 99999999;
    display: flex;
    align-items: center;
    height: 70px;
    width: 100%;
    max-width: 900px;
    border-radius: 12px;
    background-color: rgba(255, 255, 255, 0);
    backdrop-filter: blur(8px);
    transition: background-color 0.2s, box-shadow 0.2s;


    &.scrolled {
        background-color: rgba(255, 255, 255, 0.7);
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

export const dif = styled.div`
    height: 10px;
    width: 100%;
`;
