import React, { useState, useEffect } from 'react'
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import AZ900 from "../Assets/AZ-900.md";
import SQLD from "../Assets/SQLD.md";

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
  data.map(({ id, detail }) => [id, { detail }])
);


export default function Deed() {
  const { id } = useParams();
  const { detail } = React.useMemo(() => detailMap.get(id), [id]);

  const [tosText, setTosText] = useState('')

	// Fetch Terms of Use
	useEffect(() => {
		fetch(detail).then(res => res.text()).then(text => setTosText(text))
	})

  return (
    <Container>
      <p className="title">{id}관련 페이지입니다.</p>
      <Markdown>
        {tosText}
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
`;