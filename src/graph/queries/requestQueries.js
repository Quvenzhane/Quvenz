import gql from "graphql-tag";

export const GET_REQUESTS = gql`
query {
    getRequests {
          _id,requestType
          group{
            title,description,_id
          }
          event{
            title,description,_id
          }
          senderUser{
              username
              profile{
                  first_name, last_name
              }
          }
        }
  }
`
;
