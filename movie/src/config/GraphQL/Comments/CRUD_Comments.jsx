import { gql } from "@apollo/client";

export const subsKomentarS = gql`
  subscription Subs_KomentarS($_eq: Int!) {
    Comments(where: { movie_id: { _eq: $_eq } }) {
      komentar
      user_id
      comment_id
      Comments_To_User {
        fullName
      }
    }
  }
`;

export const insertKomentarS = gql`
  mutation Add_KomentarS($komentar: String!, $movie_id: Int!, $user_id: uuid!) {
    insert_Comments_one(
      object: { komentar: $komentar, movie_id: $movie_id, user_id: $user_id }
    ) {
      komentar
      movie_id
      user_id
    }
  }
`;

export const deleteKomentarS = gql`
  mutation Del_KomentarS($comment_id: Int!) {
    delete_Comments_by_pk(comment_id: $comment_id) {
      comment_id
    }
  }
`;

export const updateKomentarS = gql`
  mutation Upd_KomentarS($komentar: String!, $comment_id: Int!) {
    update_Comments_by_pk(
      pk_columns: { comment_id: $comment_id }
      _set: { komentar: $komentar }
    ) {
      komentar
      user_id
    }
  }
`;
