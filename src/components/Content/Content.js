import React from "react";
import Education from "./Education.js";
import Introduction from "./Introduction.js";
import Awards from "./Awards.js";
import Certificate from "./Certificate.js";
import Project from "./Project.js";
import * as S from './Style.js';

export default function Content() {
    return (
        <S.Stylecontent>
            <Introduction/>
            <Awards />
            <Project />
            <Certificate />
            <Education />
        </S.Stylecontent>
    );
}