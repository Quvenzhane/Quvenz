import gql from "graphql-tag";

export const RESPOND_2_REQUEST = gql`
    mutation($requestId: ID!, $responseType: String!) {
        respond2Request(_id: $requestId, response_type:$responseType){
           status
        }
    }
`;