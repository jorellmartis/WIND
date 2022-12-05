import React from 'react'
import { GET_DESTINATION_PAGES } from '../../queries/destinationPage';
import apolloClient from '../../helpers/apollo';
import styled from 'styled-components';
import FullBlockRender from '../../components/FullBlockRenderer'


const DestinationDetailContent = styled.div`
display: flex;
width: 100vw;
height: auto;
`
const DestinationDetail = ({detailPageData}) => {
  return (
    <FullBlockRender blocks={detailPageData?.blocks}/>
  )
}

export default DestinationDetail

export const getServerSideProps = async ({ params }) => {
    let detailPageData = null;
    try {
        const { data } = await apolloClient.query({
            query: GET_DESTINATION_PAGES,
            variables: {
                slug: params?.DestinationDetail,
            },
        });
        detailPageData = data?.pagesDestinations?.data[0]?.attributes
    } catch (error) {
        console.log(error);
    }  
    return {
        props: {
            detailPageData
        },
    };
};