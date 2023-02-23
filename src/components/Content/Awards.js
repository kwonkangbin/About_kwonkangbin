import React from "react";
import styled from "styled-components";
import LinkButton from "./LinkButton";

export default function Awards(){
    return(
        <Container>
            <h2>수상 경력</h2>
            <h3>실전 창업 챌린지</h3>
            <p>2022년-교육부장관상</p>
            <h3>삼성주니어SW창작대회</h3>
            <p>2022년-파이널리스트</p>
            <h3>삼성 드림업 창업캠프</h3>
            <p>2022년-우수상</p>
            <h3>JA-삼성 창업놀이터 페스티벌</h3>
            <p>2022년-입선</p>
        </Container>
    );
}

const Container = styled.section`
    > h2{
        font-size: 1.4rem;
        font-weight: bold;
        margin: 15px 0 0 10px;
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