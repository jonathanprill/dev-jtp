import React, { useRef, useEffect, useState } from 'react'
// import $ from 'jquery';
import "./severanceTheme.css";
import Dropzone from './DropZone';
import SevContact from './SevContact';
import SevSkills from './SevSkills';
import SevAbout from './SevAbout';

function SeveranceTheme() {

    // Nav
    const [currentPage, setCurrentPage] = useState('Portfolio');

    // will render pages based upon which nav button was clicked
    const renderSevPage = () => {
        if (currentPage === 'Portfolio') {
            return <Dropzone />
        }
        if (currentPage === 'Contact') {
            return <SevContact />
        }
        if (currentPage === 'Skills') {
            return <SevSkills />
        }
        if (currentPage === 'About') {
            return <SevAbout />
        }


    };
    const handleSevPageChange = (page) => setCurrentPage(page);
    // Nav End

    const ref = useRef();
    useEffect(() => {
        const toggleLine = document.querySelectorAll("#toggle-me");
        const toggleDrip = document.querySelector("#toggle-me-drip");
        const toggleHr = document.querySelector("#toggle-me-hr");
        const toggleBox = document.querySelector("#toggle-me-box");
        const toggleDiv = document.querySelector("#toggle-me-div");

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                entry.target.classList.toggle("activate", entry.isIntersecting)

                if (entry.isIntersecting) {
                    observer.unobserve(entry.target)
                    runDrip(entry);
                    runHr(entry);
                    runBox(entry);
                    runDiv(entry);
                }
            })
        },
            {
                rootMargin: "-10px -10px -64% -10px"
            }
        );

        toggleLine.forEach(card => {
            observer.observe(card)
        });

        function runDrip(entry) {
            toggleDrip.classList.toggle("activate", entry)
            if (entry) observer.unobserve(entry.target)
        }

        function runHr(entry) {
            toggleHr.classList.toggle("activate", entry)
            if (entry) observer.unobserve(entry.target)
        }


        function runBox(entry) {
            toggleBox.classList.toggle("activate", entry)
            if (entry) observer.unobserve(entry.target)
        }

        function runDiv(entry) {
            toggleDiv.classList.toggle("activate", entry)
            if (entry) observer.unobserve(entry.target)
        }
    }, [ref]);



    return (

        <div className="sev-body">
            <div className="sev-wrapper">
                <header className="sev-header">
                    <div className="sev-name">JONATHAN PRILL</div>
                    <div className="sev-occupation">WEB DEVELOPER</div>
                </header>

                <section className="sev-section">

                    <div className="sev-cont">
                        <hr id="toggle-me" className="sev-section-line-left sev-hr" />
                        <hr id="toggle-me" className="sev-section-line-right sev-hr" />
                        <div id="toggle-me-drip" className="sev-drip"></div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                            <defs>
                                <filter id="goo">
                                    <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                                    <feColorMatrix in="blur" mode="matrix"
                                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="goo" />
                                    <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                                </filter>
                            </defs>
                        </svg>
                        <hr id="toggle-me-hr" className="sev-lower-section-line sev-hr" />
                    </div>
                    <div id="toggle-me-box" className="sev-box-feature">

                        <div id="toggle-me-div" className="sev-revealed-content">

                            {/* <!-- Navigation --> */}
                            <div className='sev-tabs is-centered'>
                                <ul>
                                    <li onClick={() => handleSevPageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'sev-port-button  sev-is-active' : 'sev-port-button '}><a>PORTFOLIO</a></li>
                                    <li onClick={() => handleSevPageChange('About')} className={currentPage === 'About' ? 'sev-about-button  sev-is-active' : 'sev-about-button'}><a>ABOUT</a></li>
                                    <li className="sev-initials"><a>JP</a></li>
                                    <li onClick={() => handleSevPageChange('Skills')} className={currentPage === 'Skills' ? 'sev-skills-button  sev-is-active' : 'sev-skills-button'}><a>SKILLS</a></li>
                                    <li onClick={() => handleSevPageChange('Contact')} className={currentPage === 'Contact' ? 'sev-contact-button sev-is-active' : 'sev-contact-button'}><a>CONTACT</a></li>
                                </ul>
                            </div>

                            {/* <!-- Content --> */}
                            <div className="sev-page-content" id="tab-content">
                                {renderSevPage()}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default SeveranceTheme;