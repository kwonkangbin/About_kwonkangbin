import React from "react";
import styled from "styled-components";
import LinkButton from "./LinkButton";

export default function Awards(){
    return(
        <Container>
            <h2>수상 경력</h2>
            <h3></h3>
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