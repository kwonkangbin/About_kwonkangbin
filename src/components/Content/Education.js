import React from "react";
import styled from "styled-components";
import LinkButton from "./LinkButton";
import * as S from './style.js';

export default function Education(){
    return (
        <S.FadeIn>
            <h2>학력</h2>
            <h3>부산소프트웨어마이스터고등학교</h3>
            <p>임베디드개발과 (Embedded Development Department) 재학</p>
            <LinkButton className="schoolname" to="https://school.busanedu.net/">홈페이지</LinkButton>
        </S.FadeIn>
    );
}


