import gql from "graphql-tag";

export const GET_USER_PHOTO = gql`
query getUserPhotos($userId:ID!, $eventId:ID!) {

  getUserPhotos(user:$userId, event:$eventId){
    image_url,description
    user{
      username, image_path
      profile{
        last_name, first_name
      }
    }
  }
}
`
;
