import React, {useState} from 'react';
import Header from '../../components/Header/Header';
import PageDivider from '../../components/PageDivider/PageDivider';
import TimelineHeaderIcons from '../../components/Timeline/TimelineHeaderIcons';
import {dividerObject, headerObject, timelineBottom} from './Data'

import TimelineBody from '../../components/Timeline/TimelineBody';

const Roadmap = () => {
  const[ toggleState, setToggleState] = useState(1);

  return <>
      <TimelineHeaderIcons {...headerObject} toggleState={toggleState} setToggleState={setToggleState}/>
      <PageDivider {...dividerObject}/>
      <TimelineBody toggleState ={toggleState} />
      <PageDivider {...timelineBottom}/>
  </>;
};

export default Roadmap;
