import React, { useRef, useEffect } from 'react'
// import $ from 'jquery';
import "./severanceTheme.css";
import Dropzone from './DropZone';


function SeveranceTheme() {

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

    // Navigation
    const tabs = document.querySelectorAll('.sev-tabs li');
    const tabContentBoxes = document.querySelectorAll('#tab-content > div');

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            //removes class from all tabs when clicked
            tabs.forEach(item => item.classList.remove('sev-is-active'))
            tab.classList.add('sev-is-active')

            const target = tab.dataset.mickeymouse;
            tabContentBoxes.forEach(box => {
                if (box.getAttribute('id') === target) {
                    box.classList.remove('sev-is-hidden');
                } else {
                    box.classList.add('sev-is-hidden');
                }
            })
        })
    })

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
                            <div className="sev-tabs is-centered">
                                <ul>
                                    <li className="sev-port-button" data-mickeymouse="portfolio-content"><a>PORTFOLIO</a></li>
                                    <li className="sev-about-button" data-mickeymouse="about-content"><a>ABOUT</a></li>
                                    {/* <!-- LOGO --> */}
                                    <li className="sev-initials"><a href="#">JP</a></li>
                                    {/* <!-- LOGO --> */}
                                    <li className="sev-skills-button" data-mickeymouse="skills-content"><a>SKILLS</a></li>
                                    <li className="sev-contact-button" data-mickeymouse="contact-content"><a>CONTACT</a></li>
                                </ul>
                            </div>

                            {/* <!-- Content --> */}
                            <div className="sev-page-content" id="tab-content">
                                {/* <!-- Portfolio --> */}
                                <div id="portfolio-content" className="sev-portfolio-content sev-is-hidden">
                                    <div id="toggle-me-title-line" className="sev-title-line">
                                        <div id="toggle-me-title-text" className="sev-title-text">
                                            <span>PORTFOLIO</span>
                                        </div>
                                    </div>
                                    <h2 className="sev-sub-header">SORT THE BOXES INTO THEIR APPROPRIATE BINS</h2>
                                    <div className="sev-cards">
                                        {/* <!-- Draggable Cards --> */}
                                        <div className="sev-card">
                                            <ul id="list-toDo" className="sev-list-group">
                                                <li className="enigmatic-cliffs-72783.herokuapp.com sev-list-group-item sev-card-content">
                                                    <span className="sev-card-icon"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="sev-iconify iconify--carbon" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M22.5 23a4.5 4.5 0 1 1 4.5-4.5a4.505 4.505 0 0 1-4.5 4.5Zm0-7a2.5 2.5 0 1 0 2.5 2.5a2.503 2.503 0 0 0-2.5-2.5Z"></path><path fill="currentColor" d="M28 8h-2V3h-7v5h-2a2.002 2.002 0 0 0-2 2v18a2.002 2.002 0 0 0 2 2h11a2.003 2.003 0 0 0 2-2V10a2.002 2.002 0 0 0-2-2zm-7-3h3v3h-3zm-4 23V10h11l.002 18zM2 14h3v3H2zm5-5h3v3H7zM2 9h3v3H2zm10-5h3v3h-3zM7 4h3v3H7zM2 4h3v3H2z"></path></svg></span>
                                                    <div className="sev-card-title">Spray Can</div>
                                                    <div className="sev-card-desc">APIs &amp; MySQL</div>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* <!-- Draggable Cards --> */}
                                        <div className="sev-card">
                                            <ul id="list-toDo" className="sev-list-group">
                                                <li className="jowstafford.github.io/ChessMaster sev-list-group-item sev-card-content">
                                                    <span className="sev-card-icon"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="sev-iconify iconify--fa6-solid" width="24" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 384 512"><path fill="currentColor" d="m19 272.5l40.62 18c4.16 1.8 8.63 2.8 13.1 2.8c4 0 8.001-.754 11.78-2.289l12.75-5.125c9.125-3.625 16-11.12 18.75-20.5l9.2-30.586c1.8-6.9 6.3-12.6 12.7-15.7L160 208v50.38c0 18.12-10.4 34.72-26.6 42.82l-57.15 28.7C49.12 343.5 32 371.1 32 401.5V416h319.9l-.042-192c0-105.1-85.83-192-191.8-192H12C5.375 32 0 37.38 0 44c0 2.625.625 5.25 1.75 7.625L16 80l-9 9c-4.5 4.5-7 10.62-7 17v137.2c0 12.7 7.5 24.2 19 29.3zM52 128c11 0 20 9 20 20s-9 20-20 20s-20-9-20-20s9-20 20-20zm284 320H47.1C21.49 448 0 469.5 0 495.1c0 9.7 7.163 16.9 16 16.9h352c8.837 0 16-7.163 16-16c0-26.5-21.5-48-48-48z"></path></svg></span>
                                                    <div className="sev-card-title">Chess Master</div>
                                                    <div className="sev-card-desc">APIs &amp; Local Storage</div>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* <!-- Draggable Cards --> */}
                                        <div className="sev-card">
                                            <ul id="list-toDo" className="sev-list-group">
                                                <li className="jonathanprill.github.io/taskmaster-pro sev-list-group-item sev-card-content">
                                                    <span className="sev-card-icon"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="sev-iconify iconify--ic" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M22 5.18L10.59 16.6l-4.24-4.24l1.41-1.41l2.83 2.83l10-10L22 5.18zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8c1.57 0 3.04.46 4.28 1.25l1.45-1.45A10.02 10.02 0 0 0 12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.73 0 3.36-.44 4.78-1.22l-1.5-1.5c-1 .46-2.11.72-3.28.72zm7-5h-3v2h3v3h2v-3h3v-2h-3v-3h-2v3z"></path></svg></span>
                                                    <div className="sev-card-title">Task Master Pro</div>
                                                    <div className="sev-card-desc">Local Storage</div>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* <!-- Draggable Cards --> */}
                                        <div className="sev-card">
                                            <ul id="list-toDo" className="sev-list-group">
                                                <li className="jonathanprill.github.io/food-festival sev-list-group-item sev-card-content">
                                                    <span className="sev-card-icon"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="sev-iconify iconify--ion" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path d="M407.2 130.4C360.7 111.5 309.8 102 256 102c-53.9 0-108.3 10.3-151.2 28-8.1 3.3-15.3 9-10.1 19.5S255.9 480 255.9 480l161-329.9c3.2-6.9.9-15.4-9.7-19.7zm-221 73.6c-18.7 0-32-14.3-32-32s13.3-32 32-32 32 14.3 32 32-13.3 32-32 32zM256 347c-18.7 0-32-14.3-32-32s13.3-32 32-32 32 14.3 32 32-13.3 32-32 32zm69.8-123c-18.7 0-32-14.3-32-32s13.3-32 32-32 32 14.3 32 32-13.3 32-32 32z" fill="currentColor"></path><path d="M436.9 66C384.7 45.4 320.3 32 256 32c-64.3 0-127.6 12.1-180.9 33.4C70.4 67.3 64 71 64 79.2l9.7 24.1c2.8 4.9 8.7 8.2 15.1 8.2 1.8 0 4.3-.3 7.3-1.5 49-18.9 103.1-29.6 160-29.6 56.9 0 115.2 11.6 160 29.6 3.6 1.4 5.6 1.5 7.3 1.5 6.6 0 12.2-3.3 15-8.1l9.8-24.1c-.2-7.3-5-10.8-11.3-13.3z" fill="currentColor"></path></svg></span>
                                                    <div className="sev-card-title">Food Festival</div>
                                                    <div className="sev-card-desc">PWAs</div>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* <!-- Draggable Cards --> */}
                                        <div className="sev-card">
                                            <ul id="list-toDo" className="sev-list-group">
                                                <li className="jonathanprill.github.io/weather-dashboard sev-list-group-item sev-card-content">
                                                    <span className="sev-card-icon"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="sev-iconify iconify--fluent" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path fill="currentColor" d="M11 6c2.464 0 3.863 1.573 4.066 3.474h.062c1.586 0 2.872 1.237 2.872 2.763C18 13.763 16.714 15 15.128 15h-.694l-.017.041l-1.485 2.704a.5.5 0 0 1-.914-.396l.036-.082L13.3 15h-1.854l-.018.041l-1.485 2.704a.5.5 0 0 1-.914-.396l.036-.082L10.312 15H8.44l-1.496 2.745a.5.5 0 0 1-.914-.396l.036-.082L7.302 15h-.43C5.286 15 4 13.763 4 12.237c0-1.526 1.286-2.763 2.872-2.763h.062C7.138 7.56 8.535 6 11 6Zm0 1c-1.65 0-3.087 1.27-3.087 3.025c0 .278-.254.496-.545.496h-.55C5.814 10.52 5 11.3 5 12.26c0 .96.814 1.74 1.818 1.74h8.364C16.186 14 17 13.22 17 12.26s-.814-1.74-1.818-1.74h-.55c-.291.001-.545-.217-.545-.495C14.087 8.248 12.649 7 11 7ZM3.803 8.7a.5.5 0 0 1-.228.6l-.082.036l-.801.276a.5.5 0 0 1-.408-.909l.082-.036l.802-.276a.5.5 0 0 1 .635.31ZM8.92 4.5c.333.162.625.373.874.62c-.406.083-.786.21-1.136.375A2.28 2.28 0 0 0 5.646 8.8c-.33.098-.64.241-.925.42A3.28 3.28 0 0 1 8.919 4.5Zm-6.003.17L3 4.702l.762.371a.5.5 0 0 1-.354.931l-.085-.032l-.761-.371a.5.5 0 0 1 .354-.931ZM9.99 2.295a.5.5 0 0 1 .262.585l-.032.084l-.371.762a.5.5 0 0 1-.931-.354l.032-.085l.371-.762a.5.5 0 0 1 .67-.23ZM6.2 2.263l.037.082l.276.802a.5.5 0 0 1-.909.407l-.037-.082l-.275-.801a.5.5 0 0 1 .908-.408Z"></path></svg></span>
                                                    <div className="sev-card-title">Weather App</div>
                                                    <div className="sev-card-desc">APIs &amp; JS</div>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* <!-- Draggable Cards --> */}
                                        <div className="sev-card">
                                            <ul id="list-toDo" className="sev-list-group">
                                                <li className="jonathanprill.github.io/run-buddy sev-list-group-item sev-card-content">
                                                    <span className="sev-card-icon"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="sev-iconify iconify--ic" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm-3.6 13.9l1-4.4l2.1 2v6h2v-7.5l-2.1-2l.6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1c-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7l-1.6 8.1l-4.9-1l-.4 2l7 1.4z"></path></svg></span>
                                                    <div className="sev-card-title">Run Buddy</div>
                                                    <div className="sev-card-desc">HTML &amp; CSS</div>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* <!-- Draggable Cards --> */}
                                        <div className="sev-card">
                                            <ul id="list-toDo" className="sev-list-group">
                                                <li className="github.com/jonathanprill sev-list-group-item sev-card-content">
                                                    <span className="sev-card-icon"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="sev-iconify iconify--teenyicons" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15"><path fill="currentColor" d="m7.5.5l.369-.338a.5.5 0 0 0-.738 0L7.5.5Zm0 13l-.393.309a.5.5 0 0 0 .786 0L7.5 13.5ZM4.623 9.838l-.393.31l.393-.31Zm.246-6.467L4.5 3.032l.369.337Zm5.262 0l.369-.338l-.369.337Zm.246 6.467l.393.31l-.393-.31ZM8 15V.5H7V15h1Zm-.107-1.809L5.016 9.53l-.786.618l2.877 3.662l.786-.618ZM5.237 3.708L7.87.838L7.13.162L4.5 3.032l.736.676ZM7.131.838l2.632 2.87l.737-.675L7.869.163L7.13.837Zm2.853 8.691l-2.877 3.662l.786.618l2.877-3.662l-.786-.618Zm-.221-5.82a4.5 4.5 0 0 1 .22 5.82l.787.618a5.5 5.5 0 0 0-.27-7.114l-.737.675Zm-4.747 5.82a4.5 4.5 0 0 1 .221-5.82L4.5 3.032a5.5 5.5 0 0 0-.27 7.114l.786-.618Z"></path></svg></span>
                                                    <div className="sev-card-title">Coming Soon</div>
                                                    <div className="sev-card-desc">MongoDB</div>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>

                                    {/* <!-- TRASH --> */}
                                    <div id="trash" className="sev-mt-auto overflow-hidden trash">

                                        <div className="sev-bottom-trash">
                                            <div className="sev-doors">
                                                <div className="sev-left-door"></div>
                                                <div className="sev-right-door"></div>
                                            </div>

                                            <div className="sev-trash-labels">
                                                <span className="sev-drop-box">01</span>
                                                <span className="sev-drop-box">02</span>
                                                <span className="sev-drop-box">03</span>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                                {/* <!-- About --> */}
                                <div id="about-content" className="sev-is-hidden">
                                    <div id="toggle-me-about-line" className="sev-title-line">
                                        <div id="toggle-me-about-text" className="sev-title-text">
                                            <span>ABOUT</span>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Skills --> */}
                                <div id="skills-content" className="sev-is-hidden">
                                    <div id="toggle-me-skills-line" className="sev-title-line">
                                        <div id="toggle-me-skills-text" className="sev-title-text">
                                            <span>SKILLS</span>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Contact --> */}
                                <div id="contact-content" className="sev-is-hidden">
                                    <div id="toggle-me-contact-line" className="sev-title-line">
                                        <div id="toggle-me-contact-text" className="sev-title-text">
                                            <span>CONTACT</span>
                                        </div>
                                    </div>
                                </div>
                                <div><Dropzone /></div>
                            </div>






                        </div>


                    </div>
                </section>

            </div>

            
        </div>
    )
}

export default SeveranceTheme;