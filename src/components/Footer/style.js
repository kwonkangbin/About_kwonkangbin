import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Stylefooter = styled.footer`
    display: flex;
    flex-direction: column;
    margin-top: 65px;
    width: 100%;
    height: 180px;
    /* border-top-right-radius: 40px; */

    > div{
        > a{
            float:left;
            margin: 30px 0 0 25px;
            > img{
                width: 28px;
                height: 28px;
            }
        }
    }

    > a{
        margin: 12px 0 0 25px;
        font-size: 14px;
        font-weight: bold;
        font-style: normal;
        line-height: 1.3;
        letter-spacing: 0.2px;
        text-decoration: none;
        color: grey;
    }
`;