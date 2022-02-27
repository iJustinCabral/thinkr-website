import React from 'react'
import { useState, useRef } from 'react'
import adaIcon from '../../images/ada.png'
import { LeftSection, RightSection, SectionContainer, QuestionItem,
         SectionTitle, SectionBody, BottomSection,
         BottomTitleText, ContentWrapper, SectionPhoto } from './SplitSection.elements'

const scrollToRef = (ref) => window.scrollTo({
            top: ref.current.offsetTop - 100,
            left: 0,
            behavior: "smooth"
})

const SplitSection = () => {

  const [toggleState, setToggleState] = useState(1);
  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)

  const toggleContent = (index) => {
      setToggleState(index)
      executeScroll()
  }

  return (
    <> 
        <SectionContainer>
            <LeftSection>
                    <QuestionItem className={toggleState === 1 ? "active" : ""} onClick={() => toggleContent(1)}>
                        Why does The Dreamr DAO need to exist?
                    </QuestionItem >
                    <QuestionItem className={toggleState === 2 ? "active" : ""} onClick={() => toggleContent(2)}> 
                        What's the Lovelace Scholarship Program?
                    </QuestionItem>
                    <QuestionItem className={toggleState === 3 ? "active" : ""} onClick={() => toggleContent(3)}>
                        Who's eligible to recieve the scholarship?
                    </QuestionItem>
                    <QuestionItem className={toggleState === 4 ? "active" : ""} onClick={() => toggleContent(4)}>
                        How can someone join The Dreamr DAO?
                    </QuestionItem>
                    <QuestionItem className={toggleState === 5 ? "active" : ""} onClick={() => toggleContent(5)}>
                        When will you launch The Dreamr DAO?
                    </QuestionItem>
            </LeftSection>

            <RightSection ref={myRef}>
                <ContentWrapper className={toggleState === 1 ? "content active-content" : "content"}>
                    <SectionTitle>
                        The Cost of Higher Education is Out of Control
                    </SectionTitle> 
                    <SectionBody>
                        The average cost of a college education today in the United States continues to rise, and today it’s roughly $30,000 per year. Over a four year period, including living costs, an average college student can look to spend approximately $200,000 by the time they graduate. In our opinion this is an absolute travesty and failure of our higher education system. We want to help lift this financial burden and give relief to as many people as possible. We know first hand how helpful that relief can be, seeing that we wouldn't be able to build this project, if not due to the freedom awarded to us by our current scholarship/stipend.
                    </SectionBody>
                    <SectionBody>
                        While we are starting small with the Lovelace Scholarship program, we won’t be stopping there. It’s our core focus as of right now because it's something we can deliver by the end of summer, which will have a real impact on person(s) lives this year. In the long term we have plans to fund many more programs, and build more Web 3 focused products that can have a tangible impact in people's lives. This is our passion, and we’re dedicated to building a better future.
                    </SectionBody>
                </ContentWrapper>

                <ContentWrapper className={toggleState === 2 ? "content active-content" : "content"}>
                    <SectionTitle>
                        A Scholarship Full of Love
                    </SectionTitle> 
                    <SectionBody>
                    The Lovelace Scholarship Program was designed by the Thinkr team and will be the first proposal The Dreamr DAO council members vote on. It will do the following:
                    </SectionBody>
                    <SectionBody>
                       - Pay for a student(s) college degree on a per semester basis
                    </SectionBody>
                    <SectionBody>
                        - Pay the student(s) a bi-weekly stipend of roughly $1,500 or $40,000 a year total
                    </SectionBody>
                    <SectionBody>
                    The goal we have in mind is to provide a student tuition and living stipend for the Fall 2022 Semester. Further details regarding the application process, selection process, and academic requirements that need to be mainted and more will be announced at a later date on the official DAO website www.adreamaway.org. 
                    </SectionBody>
                    <SectionBody>
                        The Scholarship is funded by 60% of all future Thinkr NFT series, and 100% of all Dreamr NFT auction sales. We believe this will allows us to not only fund this scholarship, but help us build more Web3 products in the future to help change students' lives. Knowing how important a scholarship opportunity like this was to the founders of Thinkr, we couldn’t be more excited to bring this opportuntity to more people. 
                    </SectionBody>
                </ContentWrapper>

                <ContentWrapper className={toggleState === 3 ? "content active-content" : "content"}>
                    <SectionTitle>
                        Funding Those In Need
                    </SectionTitle> 
                    <SectionBody>
                    Our current plan is to offer the Lovelace Scholarship to underprivileged undergraduates who are currently enrolled, or plan on enrolling in a college institution. When we say underprivileged, we mean those who come from a parent(s) or guardian(s) household that makes less than $125,000 a year. We will be placing a great emphasis on those in the BIPOC community because historically they are underserved in higher education and deal with a average higher financial burden upon graduating from college.                    </SectionBody>
                    <SectionBody>
                    If a student is selected for the scholarship and currently enrolled in college, the scholarship will pay off all school debt once the student graduates with their degree. This scholarship is about freeing students of financial burdens, and those who started college before learning about our program shouldn’t be left out of the process. Those who are just starting their journey in higher learning will have their scholarship renewed on a per semester basis. We want to encourage great academic standards, so we plan to provide mentoring and tutorship opportunities to selectees as well.                    
                    </SectionBody>
                </ContentWrapper>

                <ContentWrapper className={toggleState === 4 ? "content active-content" : "content"}>
                    <SectionTitle>
                        Two Ways To Join
                    </SectionTitle> 
                    <SectionBody>
                        There will be two different ways for someone to acquire a Dreamr NFT and join the DAO:
                    </SectionBody>
                    <SectionBody>
                    - Place the highest bid in the daily Dreamr NFT auction
                    </SectionBody>
                    <SectionBody>
                    - Burn 5000 $THINK tokens plus the gas fees to mint a Dreamr NFT. 
                    </SectionBody>
                    <SectionBody>
                    The inspiration behind a daily Dreamr auction comes from the innovative Nouns project. A daily auction of 1 Dreamr NFT allows for a consistent volume of ETH to be placed into the DAO Treasury. With 100% of all sales from the daily Dreamr auction being placed directly into the treasury, the Lovelace Scholarship program will be funded for years to come. The auction also provides an opportunity for people who don’t own $THINK tokens or a Thinkr NFT the opportunity to be a part of what we’re building.
                    </SectionBody>
                    <SectionBody>
                    The second way to join will be to burn 5000 $THINK tokens. This will allow a community member who holds a Thinkr (Series 1) NFT to mint a Dreamr NFT for free, except for gas fees. By burning the tokens it makes the process of joining the DAO in the future harder, rewarding those who helped us build this project from the start by increasing scarcity of access.
                    </SectionBody>
                </ContentWrapper>

                <ContentWrapper className={toggleState === 5 ? "content active-content" : "content"}>
                    <SectionTitle>
                        Launching Q2/2022
                    </SectionTitle> 
                    <SectionBody>
                    The Dreamr DAO will launch simultaneously alongside the Thinkr (Series 1) NFT collection during Q2/2022. The website where you will be able to vote, and create proposals to help change peoples lives will be www.adreamaway.org. Everyone is just a dream away from a better life. Join us, and let's help make those dreams a reality for more and more people.
                    </SectionBody>
                    <SectionBody>
                        <SectionPhoto src={adaIcon} />
                    </SectionBody>
                    
                </ContentWrapper>

            </RightSection>

        </SectionContainer>

        <BottomSection>
              <BottomTitleText> Join Our Mission.</BottomTitleText>
              <BottomTitleText> Help Change Lives.</BottomTitleText>
        </BottomSection>
    </>
  )
}

export default SplitSection