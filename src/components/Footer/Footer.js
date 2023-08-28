import React from "react";
import LinkedIn from "../../assets/logo/linkedin.svg"
import Instagram from "../../assets/logo/instagram.png"
import Disquiet from "../../assets/logo/disquiet.png"
import * as S from './style.js';

export default function Footer() {
    return (
        <S.Stylefooter>
            <div>
                <a href="https://www.linkedin.com/in/%EA%B0%95%EB%B9%88-%EA%B6%8C-37a688261/" target="blank"><img src={LinkedIn} alt="LinkedIn"/></a>
                <a href="https://www.instagram.com/vin060331/" target="blank"><img src={Instagram} alt="Instagram" /></a>
                <a href="https://disquiet.io/@kbk282655" target="blank"><img src={Disquiet} alt="LinkedIn"/></a>
            </div>
            <a href="mailto:kbk282655@gmail.com">Email : kbk282655@gmail.com</a>
            <p>Copyright ⓒ 권강빈 KANGBIN 2022. All Rights Reserved.</p>
        </S.Stylefooter>
    );
}