import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { getStrapiMedia } from '../../../helpers/StrapiMedia'

const DestinationCardContent = styled.div`
display: flex;
flex-direction: column;
height: auto;
min-height: 500px;
width: 50%;
padding: 2% 5% 2% 5%;
text-align: center;
border: 1px gray solid;

`
const DestinationCardInnerContent = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    border: 2px solid ghostwhite;
    transition: clip-path 250ms;
    cursor: pointer;
    &:hover{
    box-shadow: -2px 16px 10px 5px rgba(235,223,235,1);
    }
    h3{
        z-index: 2;
    }
    p{
        z-index: 2;
    }
    img{
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        top: 0;
        left: 0;
        clip-path: none;
        transition: all 500ms;
        &:hover{
            /* clip-path: polygon(4% 55%, 12% 52%, 5% 63%, 8% 68%, 2% 76%, 3% 87%, 0% 91%, 14% 99%, 27% 93%, 17% 89%, 32% 74%, 39% 75%, 66% 64%, 68% 54%, 86% 49%, 96% 35%, 93% 21%, 99% 17%, 86% 12%, 74% 22%, 68% 14%, 38% 13%, 37% 6%, 31% 7%, 16% 1%, 13% 9%, 17% 35%); */
            filter: blur(2px);
            transform: scale(1.2);
        }
    }
`
const DestinationCard = ({destinationData}) => {
  return (
    <DestinationCardContent>
        <DestinationCardInnerContent>
            <Link href={`destination/${destinationData?.slug}`}><img src={getStrapiMedia(destinationData?.imgThumbnail)} />
            </Link>
            <h3>{destinationData?.title}</h3>
            <p>Whatever</p>
        </DestinationCardInnerContent>
    </DestinationCardContent>
  )
}

export default DestinationCard