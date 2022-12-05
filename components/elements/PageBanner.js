import React from 'react'
import styled from 'styled-components'
import { getStrapiMedia, getStrapiMediaText  } from '../../helpers/StrapiMedia'

const PageBannerContent = styled.div`
display: flex;
position: relative;
width: 100vw;
flex-direction: column;
justify-content: center;
align-items: flex-start;
height: clamp(250px, 60vh, 800px );
color: #ffffff;
padding: 0%;
/* max-height: 10vh; */
    h1{
        font-size: 3em;
        padding: 0% 2%;

    }
    p{
        padding: 0% 35% 0% 2%;
        font-size: 1.5em;
    }
    img{
        z-index: -1;
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: cover;

    }

`
const PageBanner = ({pageBannerData}) => {
  return (
    <section id='page-banner'>
    <PageBannerContent>
        <h1>{pageBannerData?.title}</h1>
        <p>{pageBannerData?.description}</p>    
        <img src={getStrapiMedia(pageBannerData?.imgBanner)}/>
    </PageBannerContent>
    </section>
  )
}

export default PageBanner