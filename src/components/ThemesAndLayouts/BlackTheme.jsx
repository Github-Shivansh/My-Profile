import React from 'react'
import Header from '../Header';
import SideNavbar from '../SideNavbar';
import HomeView from '../HomeView';
import SkillsView from '../SkillsView'
import ContactView from '../ContactView'
import ProjectView from '../ProjectView'

const projects = [
    {
        'name': 'Selling Cart (An Ecommerce Website)',
        'tech_used': 'Django, Django Rest Framework, React Js, HTML5 and CSS3',
        'link': 'https://github.com/Shivansh1980/SellingCart',
        'description': 'Its An Awesome Ecommerce Site with products API',
        'imageurl': process.env.PUBLIC_URL + "/static/images/SellingCart.png"
    },

    {
        'name': 'iCLOCK (Android App)',
        'tech_used': 'Android Studio, Java',
        'link': 'https://github.com/Shivansh1980/iCLOCK',
        'description': 'Its An Event App, Event Going In Colleges will be in it. User Can Register in those events',
        'imageurl': process.env.PUBLIC_URL + "/static/images/DocumentConverter.png"
    },

    {
        'name': 'Document Coverter (Website)',
        'tech_used': 'Django, Django Rest Framework, Python, HTML5 and CSS3',
        'link': 'https://github.com/Shivansh1980/doc-converter',
        'description': 'This Web Converts The Document Formates',
        'imageurl': process.env.PUBLIC_URL + "/static/images/DocumentConverter.png"
    }
]

function BlackTheme() {
    var projectComponents = [];
    for (var i = 0; i < projects.length; i++) {
        projectComponents.push(<ProjectView project={projects[i]} />)
    }
    return (
        <div class="BodyContainer">
            <SideNavbar></SideNavbar>
            <Header></Header>
            <main className="Main">
                <HomeView></HomeView>
                <SkillsView></SkillsView>
                <div id="Projects" className="Projects">
                    <h1>My Projects</h1>
                    <div className="ProjectView">
                        {projectComponents}
                    </div>
                </div>
                <ContactView />
            </main>
        </div>
    )
}

export default BlackTheme
