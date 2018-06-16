import gql from "graphql-tag";

export const GET_EVENT_PIC_COMMENT = gql`
query getPhotoComments($photoId: ID!) {

    getPhotoComments (photo: $photoId){
        comment
        user{
          username,image_path
          profile{
              last_name, first_name
          }
        }
    }
  }
`
;