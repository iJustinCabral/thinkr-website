import React from 'react';
import { FaDiscord, FaInstagram, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FooterContainer, FooterSubHeading, FooterSubscription, FooterSubText, 
         SocialIconLink, SocialLogo, SocialMedia, SocialMediaWrap, ThinkrIcon, 
         WebsiteRights, SocialIcons} from './Footer.elements';

const Footer = () => {
  return <>
    <FooterContainer>

        <FooterSubscription>
            <FooterSubHeading>
                Building a better future for learners is hard work.
            </FooterSubHeading>

            <FooterSubText>
                Follow us or join the Thinkr team.
            </FooterSubText>
        </FooterSubscription>

        <SocialMedia>
            <SocialMediaWrap>

                <SocialLogo to="/">
                    <ThinkrIcon/>
                </SocialLogo>
                
                <WebsiteRights>
                    © Copyright 2014-2022 Thinkrᴳᴹ All rights reserved. 
                </WebsiteRights>

                <SocialIcons>
                    <SocialIconLink href='https://twitter.com/TeamThinkr' target='_blank' aria-label='Twitter'>
                        <FaTwitter />
                    </SocialIconLink>

                    <SocialIconLink href='https://discord.gg/BqtPsfCNfF' target='_blank' aria-label='Discord'>
                        <FaDiscord />
                    </SocialIconLink>

                    <SocialIconLink href='https://www.twitch.tv/teamthinkr' target='_blank' aria-label='Twitch'>
                        <FaTwitch />
                    </SocialIconLink>

                    <SocialIconLink href='https://www.youtube.com/channel/UCAm6kXJOLC0go_E9d5WPPSg' target='_blank' aria-label='Youtube'>
                        <FaYoutube />
                    </SocialIconLink>

                    <SocialIconLink href='https://www.instagram.com/teamthinkr/?hl=en' target='_blank' aria-label='Instagram'>
                        <FaInstagram />
                    </SocialIconLink>
                </SocialIcons>

            </SocialMediaWrap>
        </SocialMedia>

    </FooterContainer>
  </>;
};

export default Footer;
