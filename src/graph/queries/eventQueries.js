import gql from "graphql-tag";

export const GET_EVENTS = gql`
query {
    getEventMembers{
        event{
          _id,title,description,e_type
        }
      }
  }
`
;
