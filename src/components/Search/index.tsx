import React, { useState, ChangeEvent } from "react";
import { Container, Input } from "./styles";
import { FaSearch } from "react-icons/fa";
import { useText } from "../../context";

const Search: React.FC = () => {
  const { text, setText } = useText();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <Container>
      <FaSearch />
      <Input
        type="search"
        placeholder="Search artist"
        value={text}
        onChange={handleInputChange}
      />
    </Container>
  );
};

export default Search;
