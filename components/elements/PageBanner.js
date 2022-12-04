import React from 'react'
import styled from 'styled-components'

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
const PageBanner = () => {
  return (
    <PageBannerContent>
        <h1>Lorem Ipsum</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet sagittis id consectetur purus ut faucibus. </p>    
        <img src='/pageBannerDestination.jpg'/>
    </PageBannerContent>
  )
}

export default PageBanner