import React from 'react'
import Header from '../Header';
import SideNavbar from '../SideNavbar';
import HomeView from '../HomeView';
import SkillsView from '../SkillsView'
import ContactView from '../ContactView'
import ProjectView from '../ProjectView'
import { Component } from 'react'


export class BlackTheme extends Component {
    state = {
        tview: false,
        normalview:true
    }
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="BodyContainer">
                <SideNavbar></SideNavbar>
                <Header></Header>
                <main className="Main">
                    <HomeView></HomeView>
                    <SkillsView></SkillsView>
                    <ProjectView />
                    <ContactView />
                </main>
            </div>
        )
    }
}

export default BlackTheme

