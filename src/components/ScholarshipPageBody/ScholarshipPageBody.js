import React from 'react'
import PageBodyHeader from '../PageBodyHeader/PageBodyHeader'
import ColumnItem from '../../components/ColumnItem/ColumnItem';
import GradHat from '../../images/GraduationHat.png'
import Money from '../../images/Money.png'
import Mentor from '../../images/Mentor.png'
import { Container, ColumnWrapper, ComingSoonButton } from './ScholarshipPageBody.elements'

const ScholarshipPageBody = () => {
  return (
    <>
        <Container>
            <PageBodyHeader txt={"A Scholarship Full of Love"} textColor={'red'} />

            <ColumnWrapper>
                <ColumnItem img={GradHat} txt={"The Lovelace Scholarship Program is intended for those who are attending their first year in college, or those who are already enrolled. Regardless of your circumstances, the program will ensure that you graduate college debt free. For those who are incoming freshman, the scholarship will pay off your college tuition on a semester-by-semester basis if you meet our academic standards. For those who are currently enrolled, the scholarship will also pay off any debt you have accrued before joining the program."}/>
                <ColumnItem img={Money} txt={"Today many college students work part-time or full-time which can detract from their academic success. During your time in the Lovelace Scholarship Program, we will pay you a monthly living stipend of $4,000 per month if your GPA remains above a 3.0 grade average. The purpose of the living stipend is so that any student in our program will be able to focus 100% of their time on their schoolwork so they can achieve their highest academic goals. "}/>
                <ColumnItem img={Mentor} txt={"In the program you will also be assigned a mentor who will help you with anything you may need. Whether it be finding the right tutors, helping manage your time, or just having a friend to talk you through the challenges you may face through your time in college. In addition to the assigned mentor, you will also to be given access to special channels in our discord where past graduates will be available to help you with schoolwork. It’s important to us that while in our program you understand you’re not alone in your journey through college. "}/>
            </ColumnWrapper>
        
            <ComingSoonButton>
                Available in Q3/2022
            </ComingSoonButton>

        </Container>
    </>
  )
}

export default ScholarshipPageBody