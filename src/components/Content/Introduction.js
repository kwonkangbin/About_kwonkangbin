import React from "react";
import styled from "styled-components";

const data = [
    "사용자 경험을 개선하기 위해 노력합니다",
    "서로 의견을 나누고 개선하는 과정을 좋아합니다.",
    "도전적인 사람과 도전적인 조직을 좋아합니다",
    "시각적으로 매력적이며 편리한 인터페이스를 구현하는 것을 좋아합니다.",
    "창업에 뜻이 있습니다",
];

export default function Introduction(){
    return(
        <Intro>
            <h1>안녕하세요</h1>
            <h1>매일 성장해가는</h1>
            <h1>권강빈입니다.</h1>
            <ul>
                {data.map((sentence,index)=>(
                    <li key={index}>{sentence}</li>
                ))}
            </ul>
        </Intro>
    );
}

const Intro = styled.section`
    h1{
        font-size: 3.8rem;
        font-weight: bolder;
        text-align: start;
        line-height: 140%;
        width: 0;
        margin-left: 16px;      
        white-space: nowrap;
        overflow: hidden;
        
        @media screen and (max-width: 400px){
            font-size: 2rem;
        }
    }

    h1:nth-child(1){
        margin-top: 2em;
        animation: name duration timing-function delay iteration-count direction fill-mode;
        border-right: 3px solid black;
        animation: blink .5s infinite, typing1 .5s steps(5) .5s;
        animation-fill-mode: forwards;
    }

    h1:nth-child(2){
        animation: blink .5s infinite 3.5s, typing2 .5s steps(8) 1s;
        animation-fill-mode: forwards;
    }

    h1:nth-child(3){
        margin-bottom: 2em;
        animation: blink .5s infinite, typing3 .5s steps(7) 1.5s;
        animation-fill-mode: forwards;
    }

    @media screen and (max-width: 400px){
        @keyframes typing1 {
            from{
                width: 0;
            }
            to{
                width: 140px;
                border-color: transparent;
            }
        }

        @keyframes typing2 {
            from{
                width: 0;
            }
            to{
                width: 203px;
                border-color: transparent;
            }
        }

        @keyframes typing3 {
            from{
                width: 0;
            }
            to{
                width: 177px;
                border-color: transparent;
            }
        }
    }
    @media screen and (min-width: 401px){
        @keyframes typing1 {
            from{
                width: 0;
            }
            to{
                width: 265px;
                border-color: transparent;
            }
        }   

        @keyframes typing2 {
            from{
                width: 0;
            }
            to{
                width: 381px;
                border-color: transparent;
            }
        }

        @keyframes typing3 {
            from{
                width: 0;
            }
            to{
                width: 332px;
                border-color: transparent;
            }
        }
    }

    @keyframes blink {
        50%{
            border-color: transparent;
        }
    }

    > ul {
        list-style: square;
        margin-right: 15px;
        padding-left: 35px;
        > li{
            font-size: 1.08rem;
            margin-bottom: 10px;
            line-height: 20px;
            opacity: 0;
        }
        li:nth-child(1){
            animation: opacities 1s 2.1s 1 ease forwards;
        }
        li:nth-child(2){
            animation: opacities 1s 2.3s 1 ease forwards;
        }
        li:nth-child(3){
            animation: opacities 1s 2.5s 1 ease forwards;
        }
        li:nth-child(4){
            animation: opacities 1s 2.7s 1 ease forwards;
        }
        li:nth-child(5){
            animation: opacities 1s 2.9s 1 ease forwards;
        }
        li::marker{
            color: rgb(45, 45, 45, 1);
        }

        @keyframes opacities {
            from{
                opacity: 0;
            }
            to{
                visibility: visible;
                opacity: 1;
            }
        }
    }
`;