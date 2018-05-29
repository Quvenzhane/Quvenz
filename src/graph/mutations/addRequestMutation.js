import gql from "graphql-tag";

export const ADD_REQUEST = gql`
    mutation($receiverUser: String!, $group: String!, $status: String!) {
        addRequest(receiverUser: $receiverUser, group:$group, status: $status){
           _id,status
        }
    }
`;