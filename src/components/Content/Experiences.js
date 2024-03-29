import React from "react";
import { useInView } from "react-intersection-observer";
import * as S from './Style.js';

export default function Experiences(){
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
    return (
        <S.FadeIn ref={ref} className={inView ? "viewed" : ""}>
            <h2>귀중한 경험</h2>
            <h3>NextRise 2023</h3>
            <p>한국무역협회 & KDB 산업은행 주최</p>
            <h3>PNU SW·CAMP 2022</h3>
            <p>부산대학교 주최 - 파이썬데이터분석(고급)</p>
            <h3>파이낸셜모델링 웨비나</h3>
            <p>비즈니스캔버스 주최</p>
            <h3>일잘러들의 최신 업무관리 툴 & 문서관리 툴 소개 웨비나</h3>
            <p>자버 x 먼데이닷컴 주최</p>
        </S.FadeIn>
    );
}



