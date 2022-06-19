import React from 'react'
import { useState, useEffect, useRef, Fragment } from 'react'
import { Img, DotsContainer, Dot, Carousel, CarouselContainer } from './ImageCarousel.elements';
import NFT1 from "../../images/nft1.png"
import NFT2 from "../../images/nft2.png"

const delay = 3000


const images = [
  NFT1, NFT2, NFT1, NFT2, NFT1, NFT2, NFT1, NFT2, NFT1, NFT2
]


const ImageCarousel = () => {

  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTiemeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  React.useEffect(() => {
    resetTiemeout()
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTiemeout()
    };

  }, [index]);

  return (
    <Carousel>
        <CarouselContainer style = {{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {images?.map((image, index) => (
               <Img key={index} style = {{ background: `url(${image}` }} />
            ))}
        </CarouselContainer>

        <DotsContainer>
            {images.map((_, i) => (
                <Dot key={i} 
                    onClick={() => {
                      setIndex(i)
                    }} 
                    style ={{
                      background: index === i ? "#965BA0" : "#fff"
                    }}/>
            ))}
        </DotsContainer>

    </Carousel>
  )
}

export default ImageCarousel
