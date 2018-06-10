import gql from "graphql-tag";

export const GET_EVENT_MEMBERS = gql`
query getEventMembers($eventId: ID!) {

    getEventMembers (event: $eventId){
        user_type
        user{
          username,image_path
          profile{
              last_name, first_name,bio
          }
        }
        event{
            title
            description
        }
      
    }
  }
`
;