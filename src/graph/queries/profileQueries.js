import gql from "graphql-tag";

export const GET_PROFILE = gql`
query {
    getProfile{
        _id,state,country,first_name,last_name,location,bio,date_of_birth,sex
        user{
          username,image_path
        }
        groupMember {
          group{
            title,description,_id
          }
          member{
            _id
          }
        }
        eventMember{
          event{
            _id,title,description
          }
        }
    }
  }
`
;
