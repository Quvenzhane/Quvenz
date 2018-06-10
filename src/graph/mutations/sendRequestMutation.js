import gql from "graphql-tag";

export const SEND_REQUEST = gql`
    mutation($receiverUser: String!, $group: String, $event: String, $status: String!,$requestType:String!) {
        sendRequest(receiverUser: $receiverUser, group:$group,  event:$event, status: $status, requestType:$requestType){
           _id,status
        }
    }
`;