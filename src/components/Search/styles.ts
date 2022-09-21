import styled from "styled-components";

export const Container = styled.div`
  background: rgba(209, 209, 209, 0.3);
  width: 40%;
  height: 70px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 50px;
  transition: 0.4s;
  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 1070px) {
    width: 80%;
  }
`;

export const Input = styled.input`
  width: 90%;
  background: none;
  height: 100%;
  padding: 10px;
  border: none;
  color: var(--color-white);
  outline: none;
  font-size: 1rem;

  &::placeholder {
    color: var(--color-white);
    letter-spacing: 1px;
  }

  @media (max-width: 1070px) {
    &::placeholder {
      font-size: 0.9em;
    }
  }
`;
