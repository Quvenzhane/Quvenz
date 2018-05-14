import gql from "graphql-tag";

export const GET_PROFILE = gql`
query {
    getProfile{
        _id,state,country,first_name,last_name,image_path,location,bio,date_of_birth,sex
        user{
          username
        }
        groupMember {
          group{
            title,description
          }
          member{
            _id
          }
        }
        eventMember{
          event{
            title,description
          }
        }
    }
  }
`
;
