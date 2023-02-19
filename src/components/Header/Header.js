import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import * as S from './style.js';

export default function Header() {
    const [ref, inView] = useInView({ initialInView: true });
    return ( 
        <>
            <div ref={ref} />
            <S.Styledheader className={!inView ? "scrolled" : ""}>
                <S.StyledLink to='/'>kangbin</S.StyledLink>
                <S.StyledA href="https://github.com/kwonkangbin">github</S.StyledA>
                <S.StyledA href="">BROG</S.StyledA>
            </S.Styledheader>
        </> 
    );
}
