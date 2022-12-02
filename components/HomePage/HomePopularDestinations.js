import React from 'react'
import styled from 'styled-components'

const HomePopularDestinationsContent = styled.div`
display: flex;
width: 100vw;
height: 100vh;
padding: 3% 5% 0% 5%;
flex-direction: column;
`
const SwiperContent = styled.div`
width: 100%;
height: 75%;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`
const HomePopularDestinations = () => {
  return (
    <HomePopularDestinationsContent>
    <h2>Popular Destinations</h2>
    <SwiperContent>
        <img src='/Barcelona.jpg'></img>
    </SwiperContent>
    </HomePopularDestinationsContent>
  )
}

export default HomePopularDestinations