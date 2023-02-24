import React from "react";
import styled from "styled-components";
import LinkButton from "./LinkButton";
import * as S from './style.js';

export default function Project(){
    return (
        <S.FadeIn>
            <h2>프로젝트</h2>
            <h3>Ressum</h3>
            <p>자녀 맞춤형 독서 교육 서비스</p>
            <LinkButton to="https://github.com/Ressum/FrontEnd">자세히</LinkButton>
        </S.FadeIn>
    );
}



