import React from 'react'
import styled from 'styled-components'

const FlexibleServiceContent = styled.div`
display: flex;
width: 100vw;
height: 100vh;
flex-wrap: nowrap;
`
const FlexibleServiceContentColumn = styled.div`
display: flex;
flex-direction: column;
height: 100%;
color: white;
    h2{
        font-size: 4vw;
        font-weight: 500;
    }
    &:first-child{
        justify-content: space-between;
        width: 33.33%;
        background: black;
        padding: 0% 1% 5% 1%;
    }
    &:last-child{
        width: 100%;
        background: #BC7155;
    }
    div{
        height: min-content;
        width: 100%;
        text-align: center;
    }
`
const HomeFlexibleService = ({homeFlexibleServiceData}) => {
  return (
    <section id='home-flexible-service'>
    <FlexibleServiceContent>
        <FlexibleServiceContentColumn>
            <div>
            <h2>{homeFlexibleServiceData?.txtLeftUpper}</h2>
            </div>
            <div>
            <h3>{homeFlexibleServiceData?.txtLeftLower}</h3>
            <button>All Solutions</button>
            </div>
        </FlexibleServiceContentColumn>

        <FlexibleServiceContentColumn>
            
        </FlexibleServiceContentColumn>
    </FlexibleServiceContent>
    </section>

  )
}

export default HomeFlexibleService