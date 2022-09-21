import React from "react";
import Button from "../Button";
import Search from "../Search";

import { Container } from "./styles";

const Section: React.FC = () => {
  return (
    <Container>
      <Search />
      <Button />
    </Container>
  );
};

export default Section;
