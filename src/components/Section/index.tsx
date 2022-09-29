import React from "react";
import Button from "../Button";
import Search from "../Search";

import { Container, Form } from "./styles";

const Section: React.FC = () => {
  return (
    <Container>
      <Form onClick={(e) => e.preventDefault()}>
        <Search />
        <Button />
      </Form>
    </Container>
  );
};

export default Section;
