import React from "react";
import { Link } from "react-router-dom";
import * as S from './style.js';

export default function Header() {
    return (  
        <>
            <S.Styledheader>
                <Link>about.kangbin</Link>
                <Link></Link>
                <Link></Link>
            </S.Styledheader>
        </>
    );
}
