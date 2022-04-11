import React from 'react'
import { Container, HeaderSection,  HeaderTextWrapper, HeaderTitle, TeamProfiles, TeamMember,JoinOurTeam, ProfilePic, Img1, TwitterPic, Name, Position, HiddenBio} from './BodyHeader.elements'

const BodyHeader = ({headerColor, headerTitleText, twitterlogo, thinkrLogo, member1Pic,member2Pic, member3Pic,member4Pic,member5Pic,member7Pic,member8Pic, bio1,bio2,bio3,bio4,bio5, bio7, bio8 }) => {
  //Keep Last TeamProfile as the "Join Our Team". Place all Others Above it!  
  //When adding in a new TeamMember, you need to add a function parameter for memberPic.
  //When adding in a new TeamMember, you need to hard code the href to their twitter.
  return (
      <Container>
      <HeaderSection headerColor={headerColor}>
              <HeaderTextWrapper>
                  <HeaderTitle>{headerTitleText}</HeaderTitle>
              </HeaderTextWrapper>
      </HeaderSection>

      <TeamProfiles>
        <TeamMember  >
          <ProfilePic href="https://twitter.com/iJustinCabral">
          <Img1 src={member1Pic}  />
          <TwitterPic src={twitterlogo}/>
          </ProfilePic>
          <Name>Justin Cabral</Name>
          <Position>Product Manager / Software Engineer</Position>
          <HiddenBio>{bio1}</HiddenBio>
        </TeamMember>

        <TeamMember>
          <ProfilePic href="https://twitter.com/JDuranETH">
          <Img1 src={member2Pic}  />
          <TwitterPic src={twitterlogo}/>
          </ProfilePic>
          <Name>Jonathan Duran</Name>
          <Position>Software / Security Engineer</Position>
          <HiddenBio>{bio2}</HiddenBio>
        </TeamMember>

        <TeamMember >
          <ProfilePic href="https://twitter.com/BrianMckay5">
          <Img1 src={member3Pic}  />
          <TwitterPic src={twitterlogo}/>
          </ProfilePic>
          <Name>Brian Mckay</Name>
          <Position>Software / Security Engineer</Position>
          <HiddenBio>{bio3}</HiddenBio>
        </TeamMember>

        <TeamMember  >
          <ProfilePic href="https://twitter.com/HumbertoTheMart">
          <Img1 src={member4Pic}  />
          <TwitterPic src={twitterlogo}/>
          </ProfilePic>
          <Name>Humberto Martinez</Name>
          <Position>Software / Security Engineer</Position>
          <HiddenBio>{bio4}</HiddenBio>
        </TeamMember>

        <TeamMember  >
          <ProfilePic href="https://twitter.com/iAnthonyPro">
          <Img1 src={member5Pic}  />
          <TwitterPic src={twitterlogo}/>
          </ProfilePic>
          <Name>Anthony Dattorro</Name>
          <Position>Community Manager / Public Policy</Position>
          <HiddenBio>{bio5}</HiddenBio>
        </TeamMember>
        
        <TeamMember  >
          <ProfilePic href="https://www.instagram.com/yyao.art/?hl=en">
          <Img1 src={member7Pic}  />
          <TwitterPic src={twitterlogo}/>
          </ProfilePic>
          <Name>Yimeng Yao</Name>
          <Position>Artist / Graphic Design</Position>
          <HiddenBio>{bio7}</HiddenBio>
        </TeamMember>

        <TeamMember  >
          <ProfilePic href="https://www.nzhengportfolio.com/">
          <Img1 src={member8Pic}  />
          <TwitterPic src={twitterlogo}/>
          </ProfilePic>
          <Name>Nuo Zheng</Name>
          <Position>Artist / Branding / Visual Design</Position>
          <HiddenBio>{bio8}</HiddenBio>
        </TeamMember>
    
        <JoinOurTeam>
          <ProfilePic href="https://twitter.com/TeamThinkr">
          <Img1 src={thinkrLogo}  />
          <TwitterPic src={twitterlogo}/>
          </ProfilePic>
          <Name>Join Our Team</Name>
          <Position>Contact Us</Position>
        </JoinOurTeam>
      </TeamProfiles>

      </Container>
    ) 
    //Keep Last TeamProfile as the "Join Our Team". Place all Others Above it!
  }
  export default BodyHeader
