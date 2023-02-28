import React from "react";
import Education from "./Education.js";
import Introduction from "./Introduction.js";
import Awards from "./Awards.js";
import Experiences from "./Experiences.js";
import Certificate from "./Certificate.js";
import Project from "./Project.js";
import * as S from './style.js';

export default function Content() {
    return (
        <S.Stylecontent>
            <Introduction/>
            <Experiences />
            <Awards />
            <Project />
            <Certificate />
            <Education />
        </S.Stylecontent>
    );
}