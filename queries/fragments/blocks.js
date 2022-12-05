import { imageFragment } from "./imageFragment"
export const ComponentWebsiteBlocksHomeBanner = `
...on ComponentWebsiteBlocksHomeBanner{
    __typename
    bigTitle
    smallTitle
    bannerImg{
            ${imageFragment}
        }  
    }
`
export const ComponentWebsiteBlocksHomePage = `
...on ComponentWebsiteBlocksHomePage{
    __typename
    homePageInfo
    homePageImg{
        ${imageFragment}
    }
}
`
export const ComponentWebsiteBlocksHomeFlexibleService = `
...on ComponentWebsiteBlocksHomeFlexibleService{
    __typename
    txtLeftUpper
    txtLeftLower
}
`
export const ComponentWebsiteBlocksHomeDestinations = `
...on ComponentWebsiteBlocksHomeDestinations{
    __typename
    title
}
`
export const ComponentWebsiteBlocksHomeFlightManager = `
...on ComponentWebsiteBlocksHomeFlightManager{
    __typename
    title
    description
}
`
export const ComponentWebsiteBlocksHomeBookFlight = `
...on ComponentWebsiteBlocksHomeBookFlight{
    __typename
    title
    description
}
`

export const ComponentWebsiteBlocksPageBanner = `
...on ComponentWebsiteBlocksPageBanner{
    __typename
    title
    description
    imgBanner{
        ${imageFragment}
    }
}
`

export const ComponentWebsiteBlocksDestinationListing = `
...on ComponentWebsiteBlocksDestinationListing{
    __typename
    title
    destinationCard{
        id
        pages_destination{
            data{
                attributes{
                    slug
                    title
                    description
                    imgThumbnail{
                        ${imageFragment}
                    }
                }
            }
        }
    }

}
`


