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
