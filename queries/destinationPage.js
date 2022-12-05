import { gql } from "@apollo/client"
import { ComponentWebsiteBlocksPageBanner } from "./fragments/blocks"

export const GET_DESTINATION_PAGES = gql`
    query GET_PROPERTY_PAGES($slug: String){
        pagesDestinations(filters:{
            slug:{
                eq: $slug
            }
        }){
    data{
        attributes{
            title
            description
            blocks{
                ${ComponentWebsiteBlocksPageBanner}
            }
        }
    }
    }
    }
`