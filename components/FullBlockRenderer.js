import React from 'react'
import ComponentWebsiteBlocksHomeBanner from './blocks/homepage/ComponentWebsiteBlocksHomeBanner'
import ComponentWebsiteBlocksHomePage from './blocks/homepage/ComponentWebsiteBlocksHomePage'
const FullBlockRender = ({blocks}) => {
    console.log(blocks ,"full block data")
    const getComponent = (block , index ) => {
        switch (block.__typename) {
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
            default:
                break;
        }
    }
    return <>{blocks?.map(( block, index ) => 
        getComponent(block, index)
        )}</>
}

export default FullBlockRender