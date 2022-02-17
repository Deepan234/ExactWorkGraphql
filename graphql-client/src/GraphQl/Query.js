import {gql} from '@apollo/client'

export const FETCH_USER = gql`
query{
     school{
        id
        name
        about
     } 
}
`