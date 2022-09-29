import React from "react";
import { useQuery } from "@apollo/client";
import ReactLoading from "react-loading";
import { AiFillGithub } from "react-icons/ai";

import { Container } from "./styles";

import Card from "../Card";

import { useData } from "../../context/data";

import { GET_DATA } from "../../services/query";
import { IData } from "../../services/types";

const Main: React.FC = () => {
  const { datas } = useData();

  if (!datas)
    return (
      <div style={{ textAlign: "center", cursor: "pointer" }}>
        <a
          href={"https://github.com/josephbrito"}
          target={"_blank"}
          style={{ color: "white" }}
        >
          <AiFillGithub fontSize={"2rem"} />
        </a>
      </div>
    );

  const { data, loading, error } = useQuery(GET_DATA, {
    variables: {
      param: datas,
    },
  });

  if (loading)
    return (
      <div
        style={{
          height: "80%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ReactLoading
          type={"bars"}
          height={100}
          width={100}
          color={"#961f60"}
        />
      </div>
    );

  if (error)
    return (
      <div style={{ textAlign: "center" }}>
        <p>
          Something wrong :(, please
          <span style={{ color: "blue" }}>try again</span>
        </p>
      </div>
    );

  const data_query: IData[] = data.data;

  return (
    <Container>
      {data_query.map((e: IData) => (
        <Card
          id={e.id}
          key={e.id}
          title={e.title}
          link={e.link}
          preview={e.preview}
          duration={e.duration}
          artist={e.artist}
          album={e.album}
        />
      ))}
    </Container>
  );
};

export default Main;
