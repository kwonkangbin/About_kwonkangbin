import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Styledheader = styled.header`
    position: fixed;
    z-index: 99999999;
    max-width: 900px;
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding: 12px 20px;
    background-color: gray;
    
    
    @media screen and (max-width: 950px) {
        max-width: 100%;
        top: 0;
        left: 0;
        right: 0;
        padding: 12px 16px;
        border-radius: 0;
    }

    /* background-color: rgba(255, 255, 255, 0);
    backdrop-filter: blur(8px);
    transition: background-color 0.2s, box-shadow 0.2s; 
    &.scrolled {
        background-color: rgba(255, 255, 255, 0.7);
        box-shadow: 0 0 10px rgba(230, 230, 230, 1);    
    } */
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
    transition: color 0.1s;
    font-weight: 600;
`;

export const StyledA = styled.a`
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
    transition: color 0.1s;
    font-weight: 500;
`;

// export const dif = styled.div`
//     height: 10px;
//     width: 100%;
// `;
