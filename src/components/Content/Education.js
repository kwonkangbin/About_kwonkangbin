import React from "react";
import styled from "styled-components";
import LinkButton from "./LinkButton";

export default function Education(){
    return (
        <Container>
            <h2>학력</h2>
            <h3>부산소프트웨어마이스터고등학교</h3>
            <p>임베디드개발과 (Embedded Development Department) 재학</p>
            <LinkButton className="schoolname" to="https://school.busanedu.net/">홈페이지</LinkButton>
        </Container>
    );
}

const Container = styled.div`
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

