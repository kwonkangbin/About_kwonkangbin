import React from "react";
import { useInView } from "react-intersection-observer";
import * as S from './Style.js';

export default function Certificate(){
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
    return (
        <S.FadeIn ref={ref} className={inView ? "viewed" : ""}>
            <h2>자격증</h2>
            <h3>정보처리산업기사</h3>
            <p>국가공인자격증</p>
            <h3>SQLD</h3>
            <p>국가공인자격증</p>
            <h3>AZ-900</h3>
            <p>마이크로소프트</p>
        </S.FadeIn>
    );
}



