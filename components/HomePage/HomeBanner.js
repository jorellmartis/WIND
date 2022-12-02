import React from 'react'
import styled from 'styled-components'
import { getStrapiMedia, getStrapiMediaText } from '../../helpers/StrapiMedia'

const HomeBannerContent = styled.div`
display: flex;
width: 100vw;
height: 100vh;
position: relative;
img{
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: bottom;
    }
`
const HomeBannerText = styled.div`
display: flex;
width: 100vw;
height: auto;
left: 0;
top: 0;
position: absolute;
align-items: center;
padding: 0% 10% 0% 5%;
bottom: 59%;
justify-content: space-around;
    h1{
        font-size: 22vw;
        margin-right: 6%
    }
    h2{
        font-size: 4vw;
        padding-top: 10%;
    }
`


const HomeBanner = ({homeBannerData}) => {
    return (
        <section id='home-banner'>
        <HomeBannerContent>
            <HomeBannerText>
                <h1>{homeBannerData?.bigTitle}</h1>
                <h2>{homeBannerData?.smallTitle}</h2>
            </HomeBannerText>
            <img src={getStrapiMedia(homeBannerData?.bannerImg)} alt={getStrapiMediaText(homeBannerData?.bannerImg)}/>
        </HomeBannerContent>
        </section>
    )
}

export default HomeBanner
