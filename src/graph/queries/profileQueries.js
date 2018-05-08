import gql from "graphql-tag";

export const GET_PROFILE = gql`
query {
    getProfile{
        _id,state,country
        user{
          username
        }
        groupMember {
          group{
            title,description
          }
          member{
            _id
          }
        }
        eventMember{
          event{
            title,description
          }
        }
    }
  }
`
;
