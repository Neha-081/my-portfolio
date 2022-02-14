import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, SkillsPage, Blog, Education, Experience, Contacts, Projects,  Achievement } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <About />
            <Education />
            <SkillsPage />
            <Experience />
            <Projects />
            <Achievement />
            <Blog />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
