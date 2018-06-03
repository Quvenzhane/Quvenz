import gql from "graphql-tag";

export const SEND_REQUEST = gql`
    mutation($receiverUser: String!, $group: String, $event: String, $status: String!) {
        sendRequest(receiverUser: $receiverUser, group:$group,  event:$event, status: $status){
           _id,status
        }
    }
`;