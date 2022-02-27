import React, {useState, useRef} from 'react';
import Header from '../../components/Header/Header';
import PageDivider from '../../components/PageDivider/PageDivider';
import TimelineHeaderIcons from '../../components/Timeline/TimelineHeaderIcons';
import {dividerObject, headerObject, timelineBottom} from './Data'

import TimelineBody from '../../components/Timeline/TimelineBody';

const scrollToRef = (ref) => window.scrollTo({
  top: ref.current.offsetTop - 100,
  left: 0,
  behavior: "smooth"
})

const Roadmap = () => {
  const[toggleState, setToggleState] = useState(1);
  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)

  return <>
      <TimelineHeaderIcons {...headerObject} toggleState={toggleState} setToggleState={setToggleState} executeScroll={executeScroll}/>
      <PageDivider {...dividerObject}/>
      <TimelineBody toggleState ={toggleState} myRef = {myRef} />
      <PageDivider {...timelineBottom}/>
  </>;
};

export default Roadmap;
