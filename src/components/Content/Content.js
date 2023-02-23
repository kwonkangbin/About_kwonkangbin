import React from "react";
import Education from "./Education.js";
import Introduction from "./Introduction.js";
import * as S from './style.js';

export default function Content() {
    return (
        <S.Stylecontent>
            <Introduction />
            <Education />
        </S.Stylecontent>
    );
}