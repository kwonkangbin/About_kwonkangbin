import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Stylecontent = styled.main`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;

    >h1{
        font-size: 2.6rem;
        font-weight: bold;
        text-align: start;
        line-height: 140%;
        width: 100%;
        margin: 2em 0 2em;

        @media screen and (max-width: 450px) {
            margin-left: 10px;
        }
    }
`;