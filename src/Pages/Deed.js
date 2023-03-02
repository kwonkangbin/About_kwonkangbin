import React from "react";
<<<<<<< HEAD
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import AZ900 from "../assets/AZ-900.md";
import SQLD from "../assets/SQLD.md";

const data = [
  {
    id: "AZ-900",
    detail: AZ900,
  },
  {
    id: "SQLD",
    detail: SQLD,
  },
];

const detailMap = new Map(
  data.map(({ id, title, detail }) => [id, { title, detail }])
);


export default function Deed() {
  const { id } = useParams();
  const { title, detail } = React.useMemo(() => detailMap.get(id), [id]);
  return (
    <Container>
      <p className="title">{id}관련 페이지입니다.</p>
      <Markdown>
        {detail}
      </Markdown>
    </Container>
  );
}

const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;

  > .title {
    margin: 1.5rem 0 2.5rem;
  }
`;

const Markdown = styled(ReactMarkdown)`
  a {
    color: black;
    font-weight: 500;
    transition: color 0.1s;

    &:hover {
      color: gray;
    }
  }

  ul {
    margin: 0.8rem 0;

    > li {
      margin: 0.4rem 0;
    }
  }
=======
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
>>>>>>> parent of 2bdf07f (어질어질하네)
`;