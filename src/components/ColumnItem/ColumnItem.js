import React from 'react'
import { Container, Text, Image } from './ColumnItem.elements'

const ColumnItem = ({img, txt}) => {
  return (
    <>
        <Container>
            <Image src={img} />
            <Text>
                {txt}
            </Text>
        </Container>
    </>
  )
}

export default ColumnItem