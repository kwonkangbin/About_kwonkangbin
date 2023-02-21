import React from "react";
import styled from "styled-components";

export default function Education(){
    return (
        <Container>
            <h2>학력</h2>
            <h3>부산소프트웨어마이스터고등학교</h3>
            <p>재학중</p>
        </Container>
    );
}

const Container = styled.div`
    > h2{
        font-size: 1.6rem;
        font-weight: bold;
    }
    > h3{
        font-size: 2rem;
        font-weight: 600;
        margin: 15px 0 0 10px;
    }
    > p{
        font-size: 1rem;
        font-weight: 540;
        margin: 15px 0 0 10px;
        color: gray;
    }
`;

