import gql from "graphql-tag";

export const GET_GROUP_MEMBERS = gql`
query getGroupMembers($groupId: ID!) {

    getGroupMembers (_id: $groupId){
        _id,user_type
        user{
          username,image_path
          profile{
              last_name, first_name,bio
          }
        }
        group{
          title
          description
        }
    }
  }
`
;