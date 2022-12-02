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
const HomeFlightManager = () => {
  return (
    <HomeFlightManagerContent>
        <ContentInner>
            <img src='/flightManager.jpg'/>
        </ContentInner>
        <ContentInner>
        <h3>Flight Manager</h3>
        <p>Lorem ipsum dolor sit amet. Ut accusantium eaque et velit tempore qui voluptatem temporibus qui expedita dignissimos ab optio molestiae. Et obcaecati blanditiis ut officiis reiciendis aut dolore dolores aut minima beatae in itaque quas et consequuntur sunt id minima quos. Est sequi odit aut enim omnis qui laborum deleniti ut harum distinctio.</p>
        </ContentInner>
    </HomeFlightManagerContent>
  )
}

export default HomeFlightManager