import gql from "graphql-tag";

export const ADD_EVENT = gql`
    mutation($title: String!, $description: String, $group: String) {
        addEvent(title: $title, description: $description, group: $group){
            title, description, created_at
        }
    }
`;