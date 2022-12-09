import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, EffectCreative, Mousewheel, Autoplay } from "swiper";
import styled from "styled-components";

const SwiperParent = styled.div`
display: flex;
width: 100vw;
height: 50vh;
    .swiper{
        width: 100%;
        height: 100%;
        text-align: center;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
    }
`

const CubeSwiper = () => {
    return (
        <>
        <SwiperParent>
        <Swiper
        autoplay={{
            delay: 1000,
        }}
        speed= {1000}
        direction={"vertical"}
        virtualTranslate = {true}
        mousewheel={true}
        pagination={{
            clickable: true,
        }}
        effect={"creative"}
        creativeEffect={{
            next: {
            translate: [0, "100%", 0],
            },
        }}
        modules={[Pagination, EffectCreative, Mousewheel, Autoplay]} 
        >

        <SwiperSlide><img src="https://images.unsplash.com/photo-1556388158-158ea5ccacbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"/></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1543788303-c15e49305bc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"/></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1417716146732-918825b83fa0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"/></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1513407030348-c983a97b98d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"/></SwiperSlide>   
        </Swiper>
        </SwiperParent>
        
        </>
        );
    }

export default CubeSwiper


