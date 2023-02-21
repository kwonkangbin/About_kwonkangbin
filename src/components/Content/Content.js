import React from "react";
import Education from "./Education.js";
import * as S from './style.js';

export default function Content() {
    return (
        <S.Stylecontent>
            <h1>
                안녕하세요
                <br></br>
                유사개발자
                <br></br>
                권강빈입니다.
            </h1>
            <Education />
        </S.Stylecontent>
    );
}