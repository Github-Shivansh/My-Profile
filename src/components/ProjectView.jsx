import React, { Component } from 'react';
import AOS from 'aos';
import { animateText } from '../animations'

const projects = [
    {
        'name': 'Selling Cart (An Ecommerce Website)',
        'tech_used': 'Django, Django Rest Framework, React Js, HTML5 and CSS3',
        'link': 'https://shivansh1980-sellingcart.zeet.app/shop/',
        'description': 'Its An Awesome Ecommerce Site with products API',
        'imageurl': process.env.PUBLIC_URL + "/static/images/SellingCart.png"
    },

    {
        'name': 'iCLOCK (Android App)',
        'tech_used': 'Android Studio, Java',
        'link': 'https://github.com/Shivansh1980/iCLOCK',
        'description': 'Its An Event App, Event Going In Colleges will be in it. User Can Register in those events',
        'imageurl': process.env.PUBLIC_URL + "/static/images/iCLOCK.jpg"
    },

    {
        'name': 'Document Coverter (Website)',
        'tech_used': 'Django, Django Rest Framework, Python, HTML5 and CSS3',
        'link': 'https://encryptor-api.herokuapp.com/',
        'description': 'This Web Converts The Document Formates',
        'imageurl': process.env.PUBLIC_URL + "/static/images/DocumentConverter.png"
    },

    {
        'name': 'Awesome Chatroom',
        'tech_used': 'Django, Django Rest Framework, Django Channels, Reactjs, Websockets, Reddis, Python, HTML5 and CSS3',
        'link': 'https://github.com/Shivansh1980/Django-React-Chatroom',
        'description': 'This is Awesome Chatroom with all features you can edit, update messages and can upload images and if images have texts in them then that text can be converted to real text using python',
        'imageurl': process.env.PUBLIC_URL + "/static/images/Chatroom.png"
    }
]
export class ProjectView extends Component {
    state = {
        view: 'normalview',
        layout:null
    }
    componentDidMount() {
        AOS.init();
    }
    componentDidUpdate() {
        AOS.init()
    }
    render() {
        let layout;
        var projectComponents = [];
        if (this.state.view == 'normalview') {
            for (var i = 0; i < projects.length; i++) {
                var l =
                    <div className="project" data-aos="fade-up" data-aos-duration="1500">
                        <div className="innerprojectview">
                            <h3 align="center">{projects[i].name}</h3>
                            <br />
                            <img id="project_images" src={projects[i].imageurl} alt={projects[i].name + "_pic"} />
                            <br /><br />
                            <div className="project-description">
                                <p className="descriptions">
                                    <span id="tech-used" > Technology Used :</span> {projects[i].tech_used}
                                </p>
                                <br />
                                <p className="descriptions">
                                    <span id="description"> Description :</span> {projects[i].description}
                                    <br/><br/>
                                    <a id="project_link" href={ projects[i].link} >Click Me To View Project</a>
                                </p>
                            </div>
                        </div>
                    </div>
                projectComponents.push(l);
            }
            layout = projectComponents;

            layout =
            <div className="ProjectView">
                {layout}
            </div>
        }
        else if (this.state.view == 'tview') {
            for (var i = 0; i < projects.length; i++) {
                var l =
                    <div className="project_face" data-aos="fade-up" data-aos-duration="1500">
                        <div className="inner_project_face">
                            <h3 align="center">{projects[i].name}</h3>
                            <br />
                            <img src={projects[i].imageurl} alt={projects[i].name + "_pic"} />
                            <br /><br />
                            <div className="project-description">
                                <p className="descriptions">
                                    <span id="tech-used" > Technology Used :</span> {projects[i].tech_used}
                                </p>
                                <br />
                                <p className="descriptions">
                                    <span id="description"> Description :</span> {projects[i].description}
                                </p>
                            </div>
                        </div>
                    </div>
                projectComponents.push(l);
            }
            layout =
            <div className="project_3d_view">
                <div class="wrapper" >
                    <div class="face" id="face1">{ projectComponents[0]}</div>
                    <div class="face" id="face2">{projectComponents[1]}</div>
                    <div class="face" id="face3">{projectComponents[2]}</div>
                    <div class="face" id="face4">{projectComponents[3]}</div>
                    <div class="face" id="face5">{projectComponents[3]}</div>
                    <div class="face" id="face6">{projectComponents[0]}</div>
                </div >
            </div>
        }
        return (
            <div id="Projects" className="Projects">
                <h1>My Projects</h1>
                <button
                    class="project_layout_button 3d_view_project_button"
                    value='tview'
                    onClick={(e) => {
                        this.setState({
                            view:'tview'
                        })
                    }}
                >
                    3d view
                </button>
                <button
                    class="project_layout_button normal_view_project_button"
                    value='normalview'
                    onClick={(e) => {
                        this.setState({
                           view:'normalview'
                        })
                    }}
                >
                    normal view
                </button>
                {layout}
            </div>
        )
    }
}
export default ProjectView
