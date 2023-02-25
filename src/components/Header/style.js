import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Styledheader = styled.header`
    position: fixed;
    top: 10px;
    z-index: 99999999;
    max-width: 900px;
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding: 12px 20px;
    background-color: rgb(1,1,1,0);
    backdrop-filter: blur(6px);
    border-radius: 10px;

    @media screen and (max-width: 950px) {
        top: 0;
        left: 0;
        right: 0;
        padding: 12px 16px;
        border-radius: 0px;
        border-bottom-left-radius: 15px; 
    }

    &.scrolled{
        background-color: rgb(1,1,1,0.6);
        > a{
            color: white;
        }
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: grey;
    font-size: 1.2rem;
    transition: color 0.1s;
    font-weight: 600;
    
    @media screen and (max-width: 800px){
       font-size: 1.2rem;
    }
`;

export const StyledA = styled.a`
    text-decoration: none;
    color: gray;
    font-size: 1.2rem;
    transition: color 0.1s;
    font-weight: 200;
    margin-left: 20px;

    @media screen and (max-width: 800px){
       font-size: 1.2rem;
    }
`;

export const dif = styled.div`
    height: 10px;
    width: 100%;
`;
