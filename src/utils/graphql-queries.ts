import { gql } from '@apollo/client';

export const GET_STUDENTS = gql`
  query getStudents {
    students(page: 1, page_size: 5) {
      id
      name
      family
      age
    }
  }
`;
