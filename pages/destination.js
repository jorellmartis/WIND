import Head from 'next/head'
import React from 'react'
import FullBlockRender from '../components/FullBlockRenderer'
import apolloClient from '../helpers/apollo'
import { GET_PARENT_PAGES } from '../queries/parentPages'


const destination = ({destinationPageData}) => {
  return (
    <>
    <Head>
        <title>WIND - Destination</title>
    </Head>
    <FullBlockRender blocks={destinationPageData}/>
    {/* Section 2 Destination Listings */}
    {/* Section 3 Why choose us*/}

    </>
  )
}

export default destination 

export const getStaticProps = async () => {
  let destinationPageData = null;
  try {
    const{ data } = await apolloClient.query({
      query:GET_PARENT_PAGES,
      variables: {
        slug: 'destination',
      },
    })
    destinationPageData = data?.pagesSitemaps?.data[0]?.attributes.blocks
  } catch (error) {
    console.log(error)
  }
  return{
    revalidate: 60,
    props: {
      destinationPageData
    }
  }
}