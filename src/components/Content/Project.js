import React from "react";
import LinkButton from "./LinkButton";
import { useInView } from "react-intersection-observer";
import * as S from './Style.js';

export default function Project(){
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
    return (
        <S.FadeIn ref={ref} className={inView ? "viewed" : ""}>
            <h2>프로젝트</h2>
            <h3>Ressum</h3>
            <p>간단 소개 : 자녀 맞춤형 독서 교육 서비스</p>
            <p>사용 기술 : React, SCSS, firebase, Figma(UI/UX)</p>
            <p>역할 : 프론트엔드 개발 및 기획</p>
            <LinkButton to="https://github.com/Ressum/FrontEnd">자세히</LinkButton>
        </S.FadeIn>
    );
}



