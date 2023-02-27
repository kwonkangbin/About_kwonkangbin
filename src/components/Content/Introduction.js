import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

const data = [
    "사용자 경험을 개선하기 위해 노력합니다",
    "서로 의견을 나누고 개선하는 과정을 좋아합니다.",
    "도전적인 사람과 도전적인 조직을 좋아합니다",
    "시각적으로 매력적이며 편리한 인터페이스를 구현하는 것을 좋아합니다.",
    "창업에 뜻이 있습니다",
];

export default function Introduction(){
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
    return(
        <Intro ref={ref}>
            <h1 className={inView ? "viewed" : ""}>
                안녕하세요
                <br></br>
                매일 성장해가는
                <br></br>
                권강빈입니다.
            </h1>
            <ul>
                {data.map((sentence,index)=>(
                    <li key={index} className={inView ? "viewed" : ""}>{sentence}</li>
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
        width: auto;
        margin: 2em 0 2em 16px;
        @media screen and (max-width: 400px){
            font-size: 2rem;
        }

    }
    h1:nth-child(1){
        margin-top: 2em;
    }
    h1:nth-child(2){

    }
    h1:nth-child(3){
        
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
        li.viewed {
            visibility: visible;
            opacity: 1;
        }
        li:nth-child(1){
            transition: opacity 0.75s;
        }
        li:nth-child(2){
            transition: opacity 1s;
        }
        li:nth-child(3){
            transition: opacity 1.25s;
        }
        li:nth-child(4){
            transition: opacity 1.5s;
        }
        li:nth-child(5){
            transition: opacity 1.75s;
        }
        li::marker{
            color: rgb(45, 45, 45, 1);
        }

    }
`;