import { ArrowLeft, ArrowRight } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import {sliderItems} from "../func"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`

const Display = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props=>props.sliderIndex * -100}vw);
    transition: all 1s ease;
`

const Slider = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #${props=>props.bg}
`
const ImageContainer = styled.div`
    flex: 1;
    height: 100%;
`
const Image = styled.img`
    height: 80%;
`

const InformationContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const Title = styled.h1`
    font-size: 40px;
    letter-spacing: 2px;
`
const Description = styled.p`
    margin: 20px 0px;
    font-size: 25px;
    opacity: 0.65;
`
const Button = styled.button`
    padding: 5px;
    font-size: 25px;
    opacity: 0.85;
    background-color: transparent;
    cursor: pointer;
`

const Arrow = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props=> props.direction === "left" && "20px"};
    right: ${props=> props.direction === "right" && "20px"};
    background-color: whitesmoke;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    opacity: 0.45;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 2;
`

const HomeSlide = () => {
    const [sliderIndex, setSliderIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction ==="left"){
            setSliderIndex(sliderIndex > 0 ? sliderIndex-1 : 2)
        } else {
            setSliderIndex(sliderIndex < 2 ? sliderIndex+1 : 0)
        }
    };

  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeft/>
        </Arrow>
        <Display sliderIndex={sliderIndex}>
            {sliderItems.map((item) => (
            <Slider bg={item.bg} key={item.id}>
                <ImageContainer>
                    <Image src={item.img}/>
                </ImageContainer>
                <InformationContainer>
                    <Title>{item.title}</Title>
                    <Description>{item.description}</Description>
                    <Button>LET'S SHOP!</Button>
                </InformationContainer>
            </Slider>
            ))}
            {/* <Slider bg="b1c7cd">
                <ImageContainer>
                    <Image src="https://o.remove.bg/downloads/81c1e2e1-a163-4a2c-b81f-15f68cc66367/photo-1515886657613-9f3515b0c78f-removebg-preview.png"/>
                </ImageContainer>
                <InformationContainer>
                    <Title>New collection</Title>
                    <Description>We do it for you!</Description>
                    <Button>LET'S SHOP!</Button>
                </InformationContainer>
            </Slider>
            <Slider bg="b6cdb1">
                <ImageContainer>
                    <Image src="https://o.remove.bg/downloads/11d8f634-559b-4976-8a47-ff0d550b7ddf/4-removebg-preview.png"/>
                </ImageContainer>
                <InformationContainer>
                    <Title>New collection</Title>
                    <Description>Inpired by the best!</Description>
                    <Button>LET'S SHOP!</Button>
                </InformationContainer>
            </Slider> */}
        </Display>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRight/>
        </Arrow>
    </Container>
  )
}

export default HomeSlide