import React, { useState, ChangeEvent } from "react";
import { Container, Input } from "./styles";
import { FaSearch } from "react-icons/fa";
import { callApi } from "../../services/api";
import { useContextProvider } from "../../context";

const Search: React.FC = () => {
  const { text, setText } = useContextProvider();

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
