import React from "react";
import { useInView } from "react-intersection-observer";
import LinkButton from "./LinkButton";
import * as S from './style.js';

export default function Education(){
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
    return (
        <S.FadeIn ref={ref} className={inView ? "viewed" : ""}>
            <h2>학력</h2>
            <h3>부산소프트웨어마이스터고등학교</h3>
            <p>임베디드개발과 (Embedded Development Department) 재학</p>
            <LinkButton className="schoolname" to="https://school.busanedu.net/bssm-h/">홈페이지</LinkButton>
        </S.FadeIn>
    );
}


