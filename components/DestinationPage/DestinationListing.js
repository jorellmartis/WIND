import React from 'react'
import styled from 'styled-components'
import DestinationCard from '../elements/Cards/DestinationCard'
const DestinationListingContent = styled.div`
display: flex;
width: 100vw;
height: auto;
flex-wrap: wrap;
`
const DestinationListingHeader = styled.div`
width: 100%;
text-align: center;
    h2{
        font-size: 3em;
    }
`
const DestinationListing = ({listingData}) => {
  return (
    <DestinationListingContent>
        <DestinationListingHeader>
            <h2>{listingData?.title}</h2>
        </DestinationListingHeader>
        {listingData?.destinationCard.map((destination,index) =>(
          <DestinationCard
          destinationData = {destination?.pages_destination?.data?.attributes}
          key = {destination?.id}
          />
        ))}
    </DestinationListingContent>
  )
}

export default DestinationListing