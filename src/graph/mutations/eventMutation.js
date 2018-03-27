import gql from "graphql-tag";

export const ADD_EVENT = gql`
    mutation($title: String!, $description: String) {
        addEvent(title: $title, description: $description){
            title, description, created_at
        }
    }
`;