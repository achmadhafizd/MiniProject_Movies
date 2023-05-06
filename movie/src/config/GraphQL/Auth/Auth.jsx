import { gql } from "@apollo/client";

export const RETRIEVE_SIGNUP = gql`
  query RETRIEVE_SIGNUP {
    Users {
      id
      emailSignUp
      passwordSignUp
    }
  }
`;

export const INSERT_USER = gql`
  mutation INSERT_SIGNUP(
    $emailSignUp: String!
    $fullName: String!
    $passwordSignUp: String!
    $repeatPasswordSignUp: String!
  ) {
    insert_Users_one(
      object: {
        emailSignUp: $emailSignUp
        fullName: $fullName
        passwordSignUp: $passwordSignUp
        repeatPasswordSignUp: $repeatPasswordSignUp
      }
    ) {
      id
    }
  }
`;
