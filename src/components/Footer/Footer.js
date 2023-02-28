import React from "react";
import LinkButton from "../Content/LinkButton";
import LinkedIn from "../../assets/logo/linkedin.svg"
import Instagram from "../../assets/logo/instagram.png"
import * as S from './style.js';

export default function Footer() {
    return (
        <S.Stylefooter>
            <div>
                <a href="https://www.linkedin.com/in/%EA%B0%95%EB%B9%88-%EA%B6%8C-37a688261/" target="_blank"><img src={LinkedIn} /></a>
                <a href="https://www.instagram.com/vin060331/" target="_blank"><img src={Instagram}></img></a>
            </div>
            <a href="mailto:kbk282655@gmail.com">Email : kbk282655@gmail.com</a>
        </S.Stylefooter>
    );
}