import gql from "graphql-tag";

export const SEND_REQUEST = gql`
    mutation($receiverUser: String!, $group: String!, $status: String!) {
        sendRequest(receiverUser: $receiverUser, group:$group, status: $status){
           _id,status
        }
    }
`;