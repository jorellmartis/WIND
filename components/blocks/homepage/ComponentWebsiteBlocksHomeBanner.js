import React from 'react'
import HomeBanner from '../../HomePage/HomeBanner'

const ComponentWebsiteBlocksHomeBanner = ({compBlockData}) => {
    console.log(compBlockData,"dadadad")
    return (
        <HomeBanner
            homeBannerData = {compBlockData}
        />
    )
}

export default ComponentWebsiteBlocksHomeBanner