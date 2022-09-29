import { gql } from "@apollo/client";

export const GET_DATA = gql`
  query Deezer($param: String!) {
    data(param: $param) {
      id
      title
      link
      preview
      duration
      album {
        title
        cover_big
      }
      artist {
        name
        picture_big
      }
    }
  }
`;
