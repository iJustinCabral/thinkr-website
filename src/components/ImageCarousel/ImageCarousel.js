import React from 'react'
import { useState, useEffect, useRef, Fragment } from 'react'
import { Img, DotsContainer, Dot, Carousel, CarouselContainer } from './ImageCarousel.elements';
import NFT1 from "../../images/nft1.png"
import NFT2 from "../../images/nft2.png"
import NFT3 from "../../images/nft3.jpg"
import NFT4 from "../../images/nft4.jpg"
import NFT5 from "../../images/nft5.png"
import NFT6 from "../../images/nft6.png"
const delay = 100


const images = [
  NFT3, NFT4, NFT4, NFT6
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

    </Carousel>
  )
}

export default ImageCarousel

/*
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
*/
