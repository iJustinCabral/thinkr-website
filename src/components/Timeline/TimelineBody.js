import React from 'react'
import TimeLine from './Timeline';
import TimelineHeader from './TimelineHeader';
import TimelineHeaderIcons from './TimelineHeaderIcons';
import {TimelineSection} from './TimelineBody.elements'
import {timelineHeaderLovelace, timelineHeaderLocke, timelineHeaderCarmack, tempLockeBody, tempCarmackBody} from '../../pages/Roadmap/Data'

// Lovelace Era
import ada_q1_data from '../../pages/Roadmap/ada_q1_data.json'
import ada_q2_data from '../../pages/Roadmap/ada_q2_data.json'
import ada_q3_data from '../../pages/Roadmap/ada_q3_data.json'
import ada_q4_data from '../../pages/Roadmap/ada_q4_data.json'

function TimelineBody({toggleState, myRef})  {

    return(
        <div ref={myRef}>
            <TimelineSection className= {toggleState === 1 ? "content active-content" : "content"}>
                <TimelineHeader {...timelineHeaderLovelace}/>
                <TimeLine data={ada_q1_data} />
                <TimeLine data={ada_q2_data} />
                <TimeLine data={ada_q3_data} />
                <TimeLine data={ada_q4_data} />
            </TimelineSection>
            <TimelineSection className= {toggleState === 2 ? "content active-content" : "content"}>
                <TimelineHeader {...timelineHeaderLocke}/>
                <TimelineHeader {...tempLockeBody}/>
            </TimelineSection>
            <TimelineSection className= {toggleState === 3 ? "content active-content" : "content"}>
                <TimelineHeader {...timelineHeaderCarmack}/>
                <TimelineHeader {...tempCarmackBody}/>
            </TimelineSection>
        </div>
    )

}

export default TimelineBody
