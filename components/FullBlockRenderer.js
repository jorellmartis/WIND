import React from 'react'
import ComponentWebsiteBlocksHomeBanner from './blocks/homepage/ComponentWebsiteBlocksHomeBanner'
import ComponentWebsiteBlocksHomePage from './blocks/homepage/ComponentWebsiteBlocksHomePage'
import ComponentWebsiteBlocksHomeFlexibleService from './blocks/homepage/ComponentWebsiteBlocksHomeFlexibleService'
import ComponentWebsiteBlocksHomeDestinations from './blocks/homepage/ComponentWebsiteBlocksHomeDestinations'
import ComponentWebsiteBlocksHomeFlightManager from './blocks/homepage/ComponentWebsiteBlocksHomeFlightManager'
import ComponentWebsiteBlocksHomeBookFlight from './blocks/homepage/ComponentWebsiteBlocksHomeBookFlight'
import ComponentWebsiteBlocksPageBanner from './blocks/destination/ComponentWebsiteBlocksPageBanner'
import ComponentWebsiteBlocksDestinationListing from './blocks/destination/ComponentWebsiteBlocksDestinationListing'
const FullBlockRender = ({blocks}) => {
    const getComponent = (block , index ) => {
        switch (block?.__typename) {
            //HOMEPAGE BLOCKS//
            case "ComponentWebsiteBlocksHomeBanner":
                return <ComponentWebsiteBlocksHomeBanner
                    compBlockData={block}
                    key = {`section-block-${index}`}
                />
                break;
            case "ComponentWebsiteBlocksHomePage":
                return <ComponentWebsiteBlocksHomePage
                    compBlockData={block}
                    key = {`section-block-${index}`}
                    />
                    break;
            case "ComponentWebsiteBlocksHomeFlexibleService":
                return <ComponentWebsiteBlocksHomeFlexibleService
                    compBlockData={block}
                    key = {`section-block-${index}`}
                    />
                    break;
            case "ComponentWebsiteBlocksHomeDestinations":
                return <ComponentWebsiteBlocksHomeDestinations
                    compBlockData={block}
                    key = {`section-block-${index}`}
                    />
                    break;
            case "ComponentWebsiteBlocksHomeFlightManager":
                return <ComponentWebsiteBlocksHomeFlightManager
                    compBlockData={block}
                    key = {`section-block-${index}`}
                    />
                    break;
            case "ComponentWebsiteBlocksHomeBookFlight":
                return <ComponentWebsiteBlocksHomeBookFlight
                    compBlockData={block}
                    key = {`section-block-${index}`}
                    />
                    break;
            case "ComponentWebsiteBlocksPageBanner":
                return <ComponentWebsiteBlocksPageBanner
                    compBlockData={block}
                    key = {`section-block-${index}`}
                    />
                    break;
            case "ComponentWebsiteBlocksDestinationListing":
                return <ComponentWebsiteBlocksDestinationListing
                    compBlockData={block}
                    key = {`section-block-${index}`}
                    />
                    break;
            default:
                break;
        }
    }
    return <>{blocks?.map(( block, index ) => 
        getComponent(block, index)
        )}</>
}

export default FullBlockRender