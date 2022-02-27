import React, { Component } from 'react';
import "./Timeline.css"
import logo from "../../images/icon.png"
import { HeaderSection, HeaderTextWrapper, HeaderTitle, HeaderBody} from './TimelineHeader.elements'

class TimeLine extends Component {
    render() {


        let data = this.props.data

        const protocol = "http://";
        const content = data.map((item, index) =>  <div key={item.id} data-testid="timeline-item" >

            {item.id % 2 !== 0 &&
                <div className="column-left ">
                    <div className="col-card-left">
                        <div className="col-card-title col-card-title-left">{item.title}</div>
                        <div className="col-card-subtitle col-card-subtitle-left">{item.subtitle}</div>
                        <div className="col-card-para">
                            {item.para}
                        </div>
                        {item.hasURL == 1 &&
                            <a className="numberCircle" href={protocol+ item.url} target="_blank">{item.url}</a>
                        }
                    </div>
                </div>
            }

            {item.id % 2 !== 0 &&
                <div className="column-right" >
                    <div className="col-note col-note-right">
                        <p>{item.note}</p>
                    </div>
                    <div className="quarter quarter-right">
                        <p>{item.quarter}</p>
                    </div>
                </div>
            }

            <div className="column-center">
            {item.id % 2 !== 0 &&
                    <div className="triangle-left"></div>
                }

                {item.id % 2 === 0 &&
                    <div className="triangle-right"></div>
                }


                {item.state == "done" &&
                      <div className="verticaline-done"></div>
                }
                {item.state == "done" &&
                      <div className="circle circle-done circle-img">
                      <img src={logo}/>
                    </div>
                }

                {item.state == "inprogress" &&
                    <div className="verticaline"></div>
                }
                {item.state == "inprogress" &&
                    <div className="circle circle-inprogress circle-img">
                    <img src={logo}/>
                    </div>
                }

                {item.state == "incomplete" &&
                    <div className="verticaline"></div>
                }
                {item.state == "incomplete" &&
                    <div className="circle circle-incomplete circle-inc circle-img">
                    <img src={logo}/>
                    </div>
                }
            </div>

            {item.id % 2 === 0 &&
                <div className="column-right" >
                    <div className="col-card-right">
                        <div className="col-card-title col-card-title-right">{item.title}</div>
                        <div className="col-card-subtitle col-card-subtitle-right">{item.subtitle}</div>
                        <div className="col-card-para">
                            {item.para}
                        </div>
                        {item.hasURL == 1 &&
                            <a className="numberCircle" href={protocol+ item.url} target="_blank">{item.url}</a>
                        }
                    </div>
                </div>
            }

            {item.id % 2 === 0 &&
                <div className="column-left" >
                    <div className="col-note col-note-left">
                        <p>{item.note}</p>
                    </div>

                    <div className="quarter quarter-left">
                        <p>{item.quarter}</p>
                    </div>
                </div>
            }

            <div className="clearfix"></div>
        </div>
        );

        return (
          
          <div className="timeline" data-testid="timeline_id"> {content} </div>
        )
    }
}


export default TimeLine;
