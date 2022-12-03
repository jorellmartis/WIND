import React from 'react'
import styled from 'styled-components'

const HomeFlightManagerContent = styled.div`
display: flex;
width: 100vw;
height: 100vh;
color: white;
`
const ContentInner = styled.div`
width: 50%;
height: 100%;
background: #151623;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: left;
    }
    h3{
        font-size: 3vw;
        padding: 6% 0% 4% 6%;
    }
    p{
        padding: 0% 25% 0% 6%;
        font-size: 1.5vw;
    }
`
const HomeFlightManager = ({homeFlightManagerData}) => {
  return (
    <section id='home-flight-manager'>
    <HomeFlightManagerContent>
        <ContentInner>
            <img src='/flightManager.jpg'/>
        </ContentInner>
        <ContentInner>
        <h3>{homeFlightManagerData?.title}</h3>
        <p>{homeFlightManagerData?.description}</p>
        </ContentInner>
    </HomeFlightManagerContent>
    </section>
  )
}

export default HomeFlightManager