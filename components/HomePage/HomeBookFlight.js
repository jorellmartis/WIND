import React from 'react'
import styled from 'styled-components'

const HomeBookFlightContent = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column-reverse;
    h2{
        font-size: 8vw;
        margin: 0;
    }
    span{
        font-size: 2vw;
        color: #8E8E95;
    }
`
const HomeBookFlight = ({homeBookFlightData}) => {
  return (
    <section id='home-book-flight'>
    <HomeBookFlightContent>
        <h2>{homeBookFlightData?.title}</h2>
        <span>{homeBookFlightData?.description}</span>
    </HomeBookFlightContent>
    </section>
  )
}

export default HomeBookFlight