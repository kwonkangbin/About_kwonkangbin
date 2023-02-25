import React from "react";
import { useInView } from "react-intersection-observer";
import * as S from './style.js';

export default function Header() {
    const [ref, inView] = useInView({ initialInView: true });
    return ( 
        <>
            <S.dif ref={ref} />
            <S.Styledheader className={!inView ? "scrolled" : ""}>
                <S.StyledLink to='/'>kangbin</S.StyledLink>
                <S.StyledA href="https://github.com/kwonkangbin" target="_blank">github</S.StyledA>
                <S.StyledA href="" target="_blank">blog</S.StyledA>
            </S.Styledheader>
        </> 
    );
}


