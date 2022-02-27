import React from 'react'
import { Divider, Triangle} from './PageDivider.elements'

export const PageDivider = ({dividerColor}) => {
  return (
    <div>
        <Divider >   
            <Triangle dividerColor={dividerColor}/>
        </Divider>
    </div>
  )
}

export default PageDivider