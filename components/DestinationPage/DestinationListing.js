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
const DestinationListing = () => {
  return (
    <DestinationListingContent>
        <DestinationListingHeader>
            <h2>Popular Destinations</h2>
        </DestinationListingHeader>
        <DestinationCard/>
        <DestinationCard/>
        <DestinationCard/>
        <DestinationCard/>
    </DestinationListingContent>
  )
}

export default DestinationListing