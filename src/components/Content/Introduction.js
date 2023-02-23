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
            <h1>
                안녕하세요
                <br></br>
                다양한 경험을 하는
                <br></br>
                권강빈입니다.
            </h1>
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
        font-size: 2.4rem;
        font-weight: bolder;
        text-align: start;
        line-height: 140%;
        width: auto;
        margin: 100px 0 60px;

        @media screen and (max-width: 850px) {
            margin-left: 10px;
        }
        @media screen and (max-width: 400px){
            font-size: 2rem;
        }
    }

    > ul {
        list-style: square;
        margin-right: 15px;
        padding-left: 30px;
        > li{
            font-size: 1.08rem;
            margin-bottom: 10px;
            line-height: 20px;
        }
    }
`;