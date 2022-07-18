import styled from 'styled-components'

export const Carousel = styled.div`
    margin: 0 auto;
    max-width: 350px;
    overflow: hidden;
`

export const CarouselContainer = styled.div`
    white-space: nowrap;

`

export const Img = styled.div`
    display: inline-block;
    height: 320px;
    width: 350px;
    border-radius: 20px;

`

export const DotsContainer = styled.div`
    text-align: center;
`

export const Dot = styled.div`
    display: inline-block;
    height: 20px;
    width: 20px;
    border-radius: 50%;

    cursor: pointer;
    margin: 15px 7px 0px;

    background-color: #fff;
    transition: ease 1000ms;

    &: active {
        background-color: #6a0dad;
    }
`
