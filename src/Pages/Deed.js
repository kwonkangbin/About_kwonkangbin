import React from "react";
import styled from "styled-components";
import AZ from '../image/AZ-900.png';
import SQLD from '../image/SQLD.png';

export default function Deed({props}){
    if(props == "AZ"){
        return(
            <Imgs>
                <img src={AZ}></img>
            </Imgs>
        );
    }
    else if(props == "SQLD"){
        return(
            <>
                <img src={SQLD}></img>
            </>
        );
    }
}   

const Imgs = styled.div`
    > img{
        width: 100vw;
        height: 900px;
    }
`;