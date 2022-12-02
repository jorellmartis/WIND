import React from 'react'
import styled from 'styled-components'
import { getStrapiMedia, getStrapiMediaText } from '../../helpers/StrapiMedia'


const TextContent = styled.div`
display: flex;
flex-direction: row;
position: relative;
width: 100vw;
height: 100vh;
justify-content: flex-end;
    h3{
      padding: 0% 6% 0% 0%;
      font-size: 3.5vw;
      line-height: 1.4em;
      font-weight: 400;
      width: 50%;
      height: auto;
    }
    img{
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: left;
      position: absolute;
      left: 0;
      top: 0;
    }
`
const HomePage = ({homePageData}) => {
  return (
    <section id='home-page'>
      <TextContent>
        <h3>
          {homePageData?.homePageInfo}
        </h3>
        <img src={getStrapiMedia(homePageData?.homePageImg)} alt={getStrapiMediaText(homePageData?.homePageImg)}/>
      </TextContent>
    </section>
  )
}

export default HomePage