import React from "react";
import LinkedIn from "../../Assets/logo/linkedin.svg"
import Instagram from "../../Assets/logo/instagram.png"
import * as S from './style.js';

export default function Footer() {
    return (
        <S.Stylefooter>
            <div>
                <a href="https://www.linkedin.com/in/%EA%B0%95%EB%B9%88-%EA%B6%8C-37a688261/" target="blank"><img src={LinkedIn} alt="LinkedIn"/></a>
                <a href="https://www.instagram.com/vin060331/" target="blank"><img src={Instagram} alt="Instagram" /></a>
            </div>
            <a href="mailto:kbk282655@gmail.com">Email : kbk282655@gmail.com</a>
            <p>Copyright ⓒ 권강빈 KANGBIN 2022. All Rights Reserved.</p>
        </S.Stylefooter>
    );
}