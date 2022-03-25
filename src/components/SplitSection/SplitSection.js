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
                        Why does The Thinkr DAO need to exist?
                    </QuestionItem >
                    <QuestionItem className={toggleState === 2 ? "active" : ""} onClick={() => toggleContent(2)}> 
                        What's the Lovelace Scholarship Program?
                    </QuestionItem>
                    <QuestionItem className={toggleState === 3 ? "active" : ""} onClick={() => toggleContent(3)}>
                        Who's eligible to recieve the scholarship?
                    </QuestionItem>
                    <QuestionItem className={toggleState === 4 ? "active" : ""} onClick={() => toggleContent(4)}>
                        How can someone join The Thinkr DAO?
                    </QuestionItem>
                    <QuestionItem className={toggleState === 5 ? "active" : ""} onClick={() => toggleContent(5)}>
                        When will you launch The Thinkr DAO?
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
                        While we are starting small with the Lovelace Scholarship program, we won’t be stopping there. It’s our core focus as of right now because it's something we can deliver by the end of summer, which will have a real impact on a person(s) lives this year. In the long term we have plans to fund many more programs, and build more Web 3 focused products that can have a tangible impact in people's lives. This is our passion, and we’re dedicated to building a better future.
                    </SectionBody>
                </ContentWrapper>

                <ContentWrapper className={toggleState === 2 ? "content active-content" : "content"}>
                    <SectionTitle>
                        A Scholarship Full of Love
                    </SectionTitle> 
                    <SectionBody>
                    The Lovelace Scholarship Program was designed by the Thinkr team and will be the first proposal The Thinkr Founders in tandem with the community will decide on the first 3 recipients. It will do the following:
                    </SectionBody>
                    <SectionBody>
                       - Pay for a student(s) college degree on a per semester basis
                    </SectionBody>
                    <SectionBody>
                        - Pay the student(s) a bi-weekly stipend of roughly $1,500 or $40,000 a year
                    </SectionBody>
                    <SectionBody>
                    The goal we have in mind is to provide a student tuition and living stipend for the Fall 2022 Semester. Further details regarding the application process, selection process, academic requirements that need to be maintained, and more will be announced at a later date on the official DAO website www.adreamaway.org. 
                    </SectionBody>
                    <SectionBody>
                    The Scholarship is funded by all future Thinkr NFT collections. We believe this will allow us to not only fund this scholarship but help us build more Web3 products in the future to help change students' lives. Knowing how important a scholarship opportunity like this was to the founders of Thinkr, we couldn’t be more excited to bring this opportunity to more people. 
                    </SectionBody>
                </ContentWrapper>

                <ContentWrapper className={toggleState === 3 ? "content active-content" : "content"}>
                    <SectionTitle>
                        Funding Those In Need
                    </SectionTitle> 
                    <SectionBody>
                    Our current plan is to offer the Lovelace Scholarship to underprivileged undergraduates who are currently enrolled, or plan on enrolling in a college institution. When we say underprivileged, we mean those who come from a parent(s) or guardian(s) household that makes less than $125,000 a year. We will be placing a great emphasis on those in the BIPOC community because historically they are underserved in higher education and deal with higher levels of financial burden upon graduating from college.                    </SectionBody>
                    <SectionBody>
                    If a student is selected for the scholarship and currently enrolled in college, the scholarship will pay off all school debt once the student graduates with their degree. This scholarship is about freeing students of financial burdens, and those who started college before learning about our program shouldn’t be left out of the process. Those who are just starting their journey in higher learning will have their scholarship renewed on a per semester basis. We want to encourage great academic standards, so we plan to provide mentoring and tutorship opportunities to selectees as well.                    
                    </SectionBody>
                </ContentWrapper>

                <ContentWrapper className={toggleState === 4 ? "content active-content" : "content"}>
                    <SectionTitle>
                        How To Join
                    </SectionTitle> 
                    <SectionBody>
                        There will be three different ways for someone to join the DAO:
                    </SectionBody>
                    <SectionBody>
                    - Own a Thinkr NFT
                    </SectionBody>
                    <SectionBody>
                    - (Announcment coming later)
                    </SectionBody>
                    <SectionBody>
                    - (Announcment coming later)
                    </SectionBody>
                    <SectionBody>
                    The easiest way for someone to gain access to our DAO in the future is to own a Thinkr from our NFT collection. While we can’t share the other two ways someone will be able to join at this time, rest assured because we have exciting announcements for the community. We’re planning to have a very fun way to include the community in the process and we can't wait to share more. The DAO is designed for those who are active and committed to our vision, so take that as a hint of what's to come.
                    </SectionBody>
                    <SectionBody>
                    We look forward to building the future of education in Web 3 with the help from our community. Exciting times are ahead and we're ready for any and all challenges that we may face.
                    </SectionBody>
                   
                </ContentWrapper>

                <ContentWrapper className={toggleState === 5 ? "content active-content" : "content"}>
                    <SectionTitle>
                        Launching Q4/2022
                    </SectionTitle> 
                    <SectionBody>
                    The Thinkr DAO will launch during Q4/2022. The website where you will be able to vote, and create proposals to help change peoples lives will be www.adreamaway.org. Everyone is just a dream away from a better life. Join us, and let's help make those dreams a reality for more and more people.
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