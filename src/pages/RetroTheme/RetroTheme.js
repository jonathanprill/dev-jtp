import React, { useState } from 'react';
import NavButtons from './components/NavButtons';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Welcome from './components/Welcome';
// import Projects from './components/Projects';
import ProjectCards from './components/ProjectCards';
import Footer from './components/Footer';
import Static from './components/Static';
import AboutTv from './components/AboutTv';
import ContactTv from './components/ContactTv';
import SkillsTv from './components/SkillsTv';
import ProjectsTv from './components/ProjectsTv';
import Directory from './components/Directory';
import "./retroTheme.css";

function RetroTheme() {
    // will change pages based on currentPage but will default start on Welcome
    const [currentPage, setCurrentPage] = useState('Welcome');

    // will render pages based upon which nav button was clicked
    const renderPage = () => {
        if (currentPage === 'Welcome') {
            return <Welcome />
        }
        if (currentPage === 'About') {
            return <About />
        }
        if (currentPage === 'Contact') {
            return <Contact />
        }
        if (currentPage === 'Skills') {
            return <Skills />
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />
        }

    };
    // renders projects if clicked
    const renderProjects = () => {
        if (currentPage === 'Portfolio') {
            return <ProjectCards />
        }
    }
    // will render Tv Station based upon which nav button was clicked
    const renderStatic = () => {
        if (currentPage === 'Welcome') {
            return <Static />
        }
        if (currentPage === 'About') {
            return <AboutTv />
        }
        if (currentPage === 'Contact') {
            return <ContactTv />
        }
        if (currentPage === 'Skills') {
            return <SkillsTv />
        }
        if (currentPage === 'Portfolio') {
            return <ProjectsTv />
        }
    }



    const handlePageChange = (page) => setCurrentPage(page);


    return (
        <div className='retro-hero '>
            <div className='moon'>
                <div className='tv-container'>
                    <div className='tv-image'><NavButtons currentPage={currentPage} handlePageChange={handlePageChange} /></div>
                    {renderStatic()}
                </div>

                <div className='card-container'>
                    {renderPage()}
                </div>
            </div>
            {renderProjects()}
            <Footer />
            <Directory currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
    )
}

export default RetroTheme;