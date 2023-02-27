import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Stylecontent = styled.main`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;

    /* >h1{
        font-size: 2.4rem;
        font-weight: bolder;
        text-align: start;
        line-height: 140%;
        width: 100%;
        margin: 100px 0 80px;

        @media screen and (max-width: 850px) {
            margin-left: 10px;
        }
        @media screen and (max-width: 400px;){
            font-size: 2rem;
        }
    } */
`;

export const FadeIn = styled.section`
    /* opacity: 0;
    transition: opacity 0.5s;

    &.viewed {
        visibility: visible;
        opacity: 1;
    } */
    > h2{
        font-size: 1.2rem;
        font-weight: bold;
        margin: 45px 0 0 16px;
    }
    > h3{
        font-size: 1.6rem;
        font-weight: 600;
        line-height: 130%;
        margin: 27px 15px 0 25px;
    }
    > p{
        font-size: 1rem;
        margin: 10px 0 0 25px;
        color: gray;
    }
`;