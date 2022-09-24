import styled from "styled-components";

export const Container = styled.figure`
  width: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  justify-content: center;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.3);
  gap: 1rem;
  flex-wrap: wrap;
  transition: 0.3s ease-out;

  & > img {
    width: 100%;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 1070px) {
    width: 46%;
  }
`;

export const Name = styled.p`
  font-size: 1rem;
  line-height: 1.2rem;
  padding: 5px;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.figcaption`
  width: 100%;
  background: #333;
  text-align: center;
  word-wrap: break-word;
  word-break: break-all;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 3px;
  padding: 5px;

  & > a {
    color: var(--link-color);
    text-decoration: none;
  }
`;

export const ButtonDetails = styled.button`
  padding: 10px 20px;
  border: none;
  color: var(--color-white);
  background: var(--link-color);
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
export const Modal = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 1070px) {
    flex-direction: column;
    justify-content: space-around;
  }
`;

export const Picture = styled.div`
  width: 30%;

  & > img {
    width: 100%;
  }

  @media (max-width: 1070px) {
    width: 85%;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  border-radius: 4px;
  background: #444;
  width: 45%;
  gap: 1rem;
  text-align: center;

  & > audio {
    width: 60%;
  }

  @media (max-width: 1070px) {
    width: 100%;

    & > audio {
      width: 100%;
    }
  }
`;

export const LinkD = styled.a`
  color: var(--link-color);
  text-decoration: none;

  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }
`;
