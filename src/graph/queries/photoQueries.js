import gql from "graphql-tag";

export const GET_PHOTOS = gql`
query getPhotos{

    getPhotos{
       _id
       event{
           e_type
       }
    }
  }
`
;