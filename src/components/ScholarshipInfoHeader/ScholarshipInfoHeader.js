import React from 'react'
import AdaBadge from '../../images/AdaBadge.png'
import { HeaderContainer, Image, Text, Divider} from './ScholarshipInfoHeader.elements'

const ScholarshipInfoHeader = ({txt}) => {
  return (
    <>
        <HeaderContainer>
            <Image src={AdaBadge} />
            <Text> {txt} </Text>
        </HeaderContainer>

        <Divider />
    </>
  )
}

export default ScholarshipInfoHeader