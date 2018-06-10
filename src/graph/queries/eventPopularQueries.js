import gql from "graphql-tag";

export const GET_POPULAR_EVENTS = gql`
query {
    getPopularEvents{
        _id,title
      }
  }
`
;
