import React from 'react';
import { Button, Container, MintButton } from '../../globalStyles';
import { InfoSec, InfoRow, InfoColumn, TextWrapper,
         TopLine, Heading, Subtitle, ImgWrapper, Img } from './MintSection.elements';

const InfoSection = ({ lightBg, imgStart, lightTopLine, lightTextDesc, buttonLabel,
                       description, headline, lightText, topLine, primary, img, alt, start, url }) => {
  return <>
    <InfoSec lightBg={ lightBg }>
        <Container>
            <InfoRow imgStart={imgStart}>
                <InfoColumn>
                    <TextWrapper>
                        <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                        <a href={url}>
                        <MintButton big primary={primary}>{buttonLabel}</MintButton>
                        </a>
                    </TextWrapper>
                </InfoColumn>

                <InfoColumn>
                    <ImgWrapper start={start}>
                        <Img src={img} alt={alt} />
                    </ImgWrapper>
                </InfoColumn>
            </InfoRow>
        </Container>
    </InfoSec>
  </>;
};

export default InfoSection;
