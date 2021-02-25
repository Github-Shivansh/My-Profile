import React, { Component } from 'react';
import AOS from 'aos';
import { animateText } from '../animations'
export class ProjectView extends Component {
    componentDidMount() {
        AOS.init();
    }
    componentDidUpdate() {
        AOS.init()
    }
    render() {
        return (
            <div data-aos="fade-up" data-aos-duration="1500" className="project">
                <div className="project-header">
                    <h3 align="center">{this.props.project.name}</h3>
                    <br/>
                    <img src={this.props.project.imageurl} alt={this.props.project.name + "_pic"} />
                    <br/><br/>
                    <div className="project-description">
                        <p className="descriptions">
                            <span id="tech-used" > Technology Used :</span> {this.props.project.tech_used}
                        </p>
                        <br/>
                        <p className="descriptions">
                            <span id="description"> Description :</span> {this.props.project.description}
                        </p>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default ProjectView
