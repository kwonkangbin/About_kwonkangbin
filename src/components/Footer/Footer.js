import React from "react";
import LinkedIn from "../../assets/logo/linkedin.svg"
import Instagram from "../../assets/logo/instagram.png"
import * as S from './style.js';

export default function Footer() {
    return (
        <S.Stylefooter>
            <div>
                <img src={LinkedIn}></img>
                <img src={Instagram}></img>
            </div>
            <a href="mailto:kbk282655@gmail.com">Email : kbk282655@gmail.com</a>
        </S.Stylefooter>
    );
}