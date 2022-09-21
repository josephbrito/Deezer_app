import styled from "styled-components";

export const Container = styled.button`
  width: 20%;
  border: none;
  padding: 10px;
  background: linear-gradient(to right, #251f47, #16324f, #03012c);
  letter-spacing: 1px;
  border-radius: 3px;
  color: var(--color-white);
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 1070px) {
    width: 60%;
  }
`;
