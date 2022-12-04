import Head from 'next/head'
import React from 'react'
import DestinationListing from '../components/DestinationPage/DestinationListing'
import PageBanner from '../components/elements/PageBanner'

const destination = () => {
  return (
    <>
    <Head>
        <title>WIND - Destination</title>
    </Head>
    {/* Section 1 Page Banner */}
    <PageBanner/>
    {/* Section 2 Destination Listings */}
    <DestinationListing/>
    {/* Section 3 Why choose us*/}

    </>
  )
}

export default destination 