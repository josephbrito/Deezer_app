import React from "react";

import { Container } from "./styles";

import { useText } from "../../context";
import { useData } from "../../context/data";

const Button: React.FC = () => {
  const { text } = useText();
  const { setDatas } = useData();

  const handleClick = async () => {
    if (!text) {
      alert("type artist or song!");
      return;
    }

    setDatas(text);
  };

  return <Container onClick={handleClick}>Search</Container>;
};

export default Button;
