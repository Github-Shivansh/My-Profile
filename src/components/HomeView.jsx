import React, { Component, useEffect } from 'react'
import { animateText, alterTextFontSize} from '../animations'

export class HomeView extends Component {
    componentDidMount() {

        let cssObject = {
            'color': 'white',
            'font-size': '30px',
            'line-height':'30px'
        };
        var introTextIds = animateText("introduction", "backInDown", 5, cssObject);

    }
    render() {
        return (
            <div className="HomeView">
                <div className="shivanshImage">
                    <img src={process.env.PUBLIC_URL + "/static/images/shivansh-3.jpeg"} alt="shivansh" />
                    <p className="introduction">
                        Hii, I am Shivansh Shrivastava.
                    </p>
                </div>
                <div className="aboutMe" data-aos="animate-aboutme-text">
                    <h1 align="center">About Me</h1>
                    <p className="aboutMeText" align="center">
                        I’m proud of my ability to persevere and overcome challenges. 
                        I have the 2 years of programming experience you’re looking for
                        , a track record of successful projects, and proven expertise 
                        in agile development processes. At the same time, I have developed 
                        my communication skills from working directly with my friends,
                        which means I am well prepared to work on high-profile, cross-department projects.
                        I have the experience to start contributing from day one and I am truly excited about
                        the prospect of getting started.
                    </p>
                </div>
            </div>
        )
    }
}
export default HomeView
