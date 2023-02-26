import React from "react";
import styled from "styled-components";
import LinkButton from "./LinkButton";
import * as S from './style.js';

export default function Certificate(){
    return (
        <S.FadeIn>
            <h2>자격증</h2>
            <h3>SQLD(국가공인자격증)</h3>
            <LinkButton to="Certificate/SQLD">자세히</LinkButton>
            <h3>AZ-900(마이크로소트트)</h3>
            <LinkButton to="ViewDetail/AZ-900">자세히</LinkButton>
        </S.FadeIn>
    );
}



