import React, { useState } from "react";

import {
  Container,
  Content,
  Name,
  ButtonDetails,
  Modal,
  Picture,
  Info,
  LinkD,
} from "./styles";

import { IData } from "../../services/types";
import ReactModal from "react-modal";

const Card: React.FC<IData> = (data: IData) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleModalToggle = () => {
    setOpen(!open);
  };

  ReactModal.setAppElement("#root");
  return (
    <Container>
      <img src={data.album.cover_big} />
      <Content>
        <Name>{data.title}</Name>
        <span>Duration: {(data.duration / 60).toFixed(2)}</span>
        <ButtonDetails onClick={handleModalToggle}>Details</ButtonDetails>
        <ReactModal
          isOpen={open}
          onRequestClose={handleModalToggle}
          style={{
            overlay: {
              backgroundColor: "#555",
            },

            content: {
              backgroundColor: "#222",
              border: "none",
            },
          }}
        >
          <button
            onClick={handleModalToggle}
            style={{
              padding: "10px 20px",
              border: "none",
              background: "red",
              color: "white",
              position: "absolute",
              right: 0,
              top: 0,
              cursor: "pointer",
            }}
          >
            X
          </button>
          <Modal>
            <Picture>
              <img src={data.artist.picture_big} />
            </Picture>
            <Info>
              <Name>{data.artist.name}</Name>
              <h3>{data.title}</h3>
              <Name>Album: {data.album.title}</Name>
              <audio controls>
                <source src={data.preview} />
              </audio>
              <LinkD href={data.link} target="_blank">
                Full song
              </LinkD>
            </Info>
          </Modal>
        </ReactModal>
      </Content>
    </Container>
  );
};

export default Card;
