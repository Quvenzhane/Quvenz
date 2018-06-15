import gql from "graphql-tag";

export const GET_USER_PHOTO = gql`
query getUserPhotos($userId:ID!, $eventId:ID!) {

  getUserPhotos(user:$userId, event:$eventId){
    _id,image_url,description,view, createdAt
    photoComment{
      _id,comment
      user{
        username
      }
    }
    photoLike{
      _id
      user{
        email
      }
    }
    user{
      _id,username, image_path
      profile{
        last_name, first_name
      }
    }
  }
}
`
;
