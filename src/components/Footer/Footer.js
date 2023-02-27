import React from "react";
import { useInView } from "react-intersection-observer";
import * as S from './style.js';

export default function Footer() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
    return (
        <S.Stylefooter ref={ref}>
            
        </S.Stylefooter>
    );
}