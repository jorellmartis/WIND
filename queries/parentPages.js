import { gql } from "@apollo/client"
import { ComponentWebsiteBlocksHomeBanner, ComponentWebsiteBlocksHomePage } from "./fragments/blocks"

export const GET_PARENT_PAGES = gql`
query GET_PARENT_PAGES($slug : String){
    pagesSitemaps(filters:{
    slug:{
        eq: $slug
        }
    }){
    data{
        attributes{
            blocks{ 
                ${ComponentWebsiteBlocksHomeBanner}
                ${ComponentWebsiteBlocksHomePage}
            }
        }
    }
    }
}

`
