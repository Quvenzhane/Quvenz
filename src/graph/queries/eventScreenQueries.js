import gql from "graphql-tag";

export const GET_EVENTSCREEN = gql`
query getEvent ($eventId: ID!){
  
      getEvent (_id: $eventId){
        title,description
        group{
          title
        }
        eventMember{
          _id
          user{
            _id,username,image_path
            profile{
              first_name,last_name
            }
          }
          photo{
            image_url
          }
         }
    
      }
  }
`
;
