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
    > h2{
        font-size: 1.4rem;
        font-weight: bold;
        margin: 35px 0 0 10px;
    }
    > h3{
        font-size: 1.6rem;
        font-weight: 600;
        margin: 20px 0 0 20px;
    }
    > p{
        font-size: 1rem;
        margin: 10px 0 0 20px;
        color: gray;
    }
`;