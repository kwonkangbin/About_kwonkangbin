import React from "react";
import styled from "styled-components";
import LinkButton from "./LinkButton";
import * as S from './style.js';

export default function Experiences(){
    return (
        <S.FadeIn>
            <h2>귀중한 경험</h2>
            <h3>PNU SW·CAMP 2022</h3>
            <p>파이썬데이터분석(고급)</p>
            <LinkButton to="/">자세히</LinkButton>
        </S.FadeIn>
    );
}



