import React from "react";
import LinkButton from "./LinkButton";
import { useInView } from "react-intersection-observer";
import * as S from './Style.js';

export default function Project(){
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
    return (
        <S.FadeIn ref={ref} className={inView ? "viewed" : ""}>
            <h2>프로젝트</h2>
            <h3>Somein</h3>
            <p>간단 소개 : 소프트웨어마이스터고 상호 교류를 위한 커뮤니티</p>
            <p>사용 기술 : React, Vite, Recoil, React-Query</p>
            <p>역할 : 프론트엔드 개발 및 기획</p>
            <div>
                <LinkButton to="https://null-somein.kro.kr/">웹사이트</LinkButton>
                <LinkButton to="https://github.com/NULL-SoftwareMeisterHighSchool/Project_Frontend">코드</LinkButton>
            </div>
            <h3>Galphy 렌딩페이지</h3>
            <p>간단 소개 : 갈피 서비스 소개를 위한 렌딩페이지</p>
            <p>사용 기술 : React, firebase, Figma(UI/UX)</p>
            <p>역할 : 프론트엔드 개발 및 기획</p>
            <p>2023년</p>
            <LinkButton to="https://www.galphy.app/">웹사이트</LinkButton>
        </S.FadeIn>
    );
}



