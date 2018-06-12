
import gql from "graphql-tag";

export const ADD_PHOTO_COMMENT = gql`
    mutation($comment: String!, $photo: ID!) 
    {
        addPhotoComment(comment: $comment, photo:$photo){
            _id
        }
    }
`;