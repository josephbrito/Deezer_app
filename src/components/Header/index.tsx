import React from "react";

import { Container, Logo } from "./styles";
import DeezerImg from "../../assets/deezer.png";

const Header: React.FC = () => {
  return (
    <Container id="teste">
      <Logo>
        <img src={DeezerImg} />
      </Logo>
    </Container>
  );
};

export default Header;
