import React from "react";
import { useInView } from "react-intersection-observer";
import * as S from './Style.js';
import LinkButton from "./LinkButton.js";

export default function Awards(){
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
    return(
        <S.FadeIn ref={ref} className={inView ? "viewed" : ""}>
            <h2 >수상 경력</h2>
            <h3>실전 창업 챌린지</h3>
            <p>2022년 - 교육부장관상</p>
            <h3>삼성주니어SW창작대회</h3>
            <p>2022년 - 파이널리스트</p>
            <h3>삼성 드림업 창업캠프</h3>
            <p>2022년 - 우수상</p>
            <h3>JA-삼성 창업놀이터 페스티벌</h3>
            <p>2022년 - 입선</p>
            <LinkButton to="ViewDetail/News">내가 나온 기사</LinkButton>
        </S.FadeIn>
    );
}
