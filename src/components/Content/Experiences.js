import React from "react";
import styled from "styled-components";
import LinkButton from "./LinkButton";

export default function Experiences(){
    return (
        <Container>
            <h2>귀중한 경험</h2>
            <h3>PNU SW·CAMP 2022</h3>
            <p>파이썬데이터분석(고급)</p>
            <LinkButton to="/">자세히</LinkButton>
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

