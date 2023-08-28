import React from "react";
import { useInView } from "react-intersection-observer";
import * as S from './Style.js';

export default function Awards(){
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
    return(
        <S.FadeIn ref={ref} className={inView ? "viewed" : ""}>
            <h2 >수상 경력</h2>
            <h3>2022 실전 창업 챌린지</h3>
            <p>교육부장관상</p>
            <h3>2022 삼성 드림업 창업캠프</h3>
            <p>우수상(JA KOREA 회장상)</p>
            <h3>2022 삼성주니어SW창작대회</h3>
            <p>파이널리스트</p>
            <h3>2022 JA-삼성 창업놀이터 페스티벌</h3>
            <p>입선</p>
            <h3>2023 부산 SW·AI 교육 중등학생 해커톤대회</h3>
            <p>우수상</p>
        </S.FadeIn>
    );
}
