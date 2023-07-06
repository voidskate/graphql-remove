import { gql } from "@apollo/client";

export const GET_FOODS = gql`
    query {
        allFoods {
            id
            firstName
            lastName
        }
    }
`

export const REMOVE_FOOD = gql`
    mutation removeFood($id: String!){
        removeFood(id: $id){
            id
            firstName
            lastName
        }
    }
`