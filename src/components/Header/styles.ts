import styled from "styled-components";

export const Container = styled.header`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  flex-direction: column;
`;

export const Logo = styled.div`
  height: 100%;
  width: 200px;
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  & > img {
    width: 70%;
  }
`;
