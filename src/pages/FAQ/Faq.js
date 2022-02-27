import React, {useState, useRef} from 'react';
import HeaderWithIcons from '../../components/Header/HeaderWithIcons';
import PageDivider from '../../components/PageDivider/PageDivider';
import BodyFAQ from '../../components/Body/BodyFAQ';
import { dividerObject, headerObject} from './Data';

const scrollToRef = (ref) => window.scrollTo({
    top: ref.current.offsetTop - 100,
    left: 0,
    behavior: "smooth"
})

function Faq() {

    const [toggleState, setToggleState] = useState(1);
    const myRef = useRef(null)
    const executeScroll = () => scrollToRef(myRef)

    return <>
    <HeaderWithIcons {...headerObject} toggleState = {toggleState} setToggleState ={setToggleState} executeScroll = {executeScroll}/>
    <PageDivider {...dividerObject} />
    <BodyFAQ toggleState ={toggleState} myRef = {myRef} />
    </>;
};

export default Faq;