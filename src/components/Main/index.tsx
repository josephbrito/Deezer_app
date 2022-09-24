import React from "react";
import Card from "../Card";

import { Container } from "./styles";

import { useData } from "../../context/data";

const Main: React.FC = () => {
  const { datas } = useData();

  return (
    <Container>
      {datas.map((e) => (
        <Card
          key={e.id}
          id={e.id}
          title={e.title}
          duration={e.duration}
          link={e.link}
          preview={e.preview}
          album={e.album}
          artist={e.artist}
        />
      ))}
    </Container>
  );
};

export default Main;
