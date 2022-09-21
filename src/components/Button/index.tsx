import React from "react";

import { Container } from "./styles";
import { useContextProvider } from "../../context";
import { callApi } from "../../services/api";
import { useData } from "../../context/data";

const Button: React.FC = () => {
  const { text } = useContextProvider();
  const { setDatas } = useData();

  const handleClick = async () => {
    if (!text) {
      alert("Digite seu artista!");
      return;
    }

    let data = await callApi(text);
    setDatas(data);
  };

  return <Container onClick={handleClick}>Pequisar</Container>;
};

export default Button;
