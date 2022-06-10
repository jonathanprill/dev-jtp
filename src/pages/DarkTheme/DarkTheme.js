import React, { useRef, useEffect } from 'react'
import "./index.css";
import { MaterialSymbolsArrowDownward, MdiGithub } from "../../components/Symbols";

function DarkTheme() {
    const ref = useRef();
    useEffect(() => {
        const lineLeft = document.querySelectorAll("#section-lines");
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                entry.target.classList.toggle("show", entry.isIntersecting)
                //creates a rule that once animation has played, it wont play again if you scroll up and down
                if (entry.isIntersecting) observer.unobserve(entry.target)
            })
        },
            {
                //rule regarding percentage of item on screen
                threshold: 0,
                //rule giving border margin to start animation
                rootMargin: "-1px"
            }
        );

        lineLeft.forEach(card => {
            observer.observe(card)
        });
    }, [ref]);

    return (
        <div className="dark-theme">
            <section className="section-full section-title">
                <nav>
                    <ul>
                        <li><a href="#about-section">About</a></li>
                        <li><a href="#project-section">Projects</a></li>
                        <li><a href="#contact-section">Contact</a></li>
                    </ul>
                </nav>
                <div className="titles">
                    <div className="title-block-1">
                        <h1 className="first-name">Jonathan</h1>
                        <h1 className="last-name">-------Prill</h1>
                    </div>
                    <div className="title-block-2">
                        <h1 className="first-name">WEB--------</h1>
                        <h1 className="last-name">DEVELOPER</h1>
                    </div>
                </div>
            </section>

            <hr className="section-line-right" id="section-lines" />

            <section id="about-section" className="section-bio">

                <div className="text-zone">
                    <h2>About Me</h2>
                    <p>
                        Being a mechanical engineer for about a decade I realized most of my enjoyment came from working with software.
                        From programming automated machinery to managing complex parametric databases, my passion for computation continued to grow.

                        During the pandemic I had time to rethink my trajectory and soon realized it was time to pursue my true interest of computers, how they worked, and how to write code.

                        Taking the Full-Stack Web Development course at UT Austin has truly ignited a passion and curiosity for
                        the art of coding. I look forward to turning this passion into a profession.
                    </p>
                </div>
                <section className="resume">
                    <a href='Jonathan-Prill-Resume.pdf' download='Jonathan Prill Resume' target="_blank">Download Resume</a>
                </section>
                <section className="skills">
                    <div className="skills-icons html-icon">

                    </div>




                </section>


                <div className="scroll-down">
                    <span>Scroll Down</span>
                    <MaterialSymbolsArrowDownward />

                </div>
            </section>

            <hr className="section-line-left" id="section-lines" />

            <section id="project-section" className="section-project">
                <div className="project-articles">
                    <article className="project-article" style={{ borderTopColor: "#FD2155" }}>
                        <div className="project-content">
                            <div className="post-data" style={{ color: "#FD2155" }}>MERN &amp; GraphQL</div>
                            <a target="_blank" rel="noreferrer" href="https://github.com/DevJonTaylor/code-vegeta"><MdiGithub style={{ paddingTop: "12px" }} /></a>
                            <a target="_blank" rel="noreferrer" href="https://code-vegeta.herokuapp.com/">
                                <h5 className="post-title">Vegeta</h5>
                            </a>
                            <div className="post-desc">Improve your online presence with this website builder.</div>
                        </div>
                    </article>
                    <article className="project-article" style={{ borderTopColor: "orange" }}>
                        <div className="project-content">
                            <div className="post-data" style={{ color: "orange" }}>APIs &amp; mySQL</div>
                            <a target="_blank" rel="noreferrer" href="https://github.com/jonathanprill/spray-can-project-2"><MdiGithub style={{ paddingTop: "12px" }} /></a>
                            <a target="_blank" rel="noreferrer" href="https://enigmatic-cliffs-72783.herokuapp.com/">
                                <h5 className="post-title">Spray Can</h5>
                            </a>
                            <div className="post-desc">For those that want to discover new street art.</div>
                        </div>
                    </article>
                    <article className="project-article" style={{ borderTopColor: "#E4EE89" }}>
                        <div className="project-content">
                            <div className="post-data" style={{ color: "#E4EE89" }}>APIs &amp; JS</div>
                            <a target="_blank" rel="noreferrer" href="https://github.com/jowstafford/ChessMaster"><MdiGithub style={{ paddingTop: "12px" }} /></a>
                            <a target="_blank" rel="noreferrer" href="https://jowstafford.github.io/ChessMaster/">
                                <h5 className="post-title">Chess Master</h5>
                            </a>
                            <div className="post-desc">For chess players that want to take their game to the next level.</div>
                        </div>
                    </article>
                    <article className="project-article" style={{ borderTopColor: "#81D8F7" }}>
                        <div className="project-content">
                            <div className="post-data" style={{ color: "#81D8F7" }}>MERN</div>
                            <a target="_blank" rel="noreferrer" href="https://github.com/jonathanprill/deep-thoughts"><MdiGithub style={{ paddingTop: "12px" }} /></a>
                            <a target="_blank" rel="noreferrer" href="https://mysterious-ocean-45457.herokuapp.com/">
                                <h5 className="post-title">Deep Thoughts</h5>
                            </a>
                            <div className="post-desc">Social media platform built using the MERN stack.</div>
                        </div>
                    </article>
                    <article className="project-article" style={{ borderTopColor: "#FD2155" }}>
                        <div className="project-content">
                            <div className="post-data" style={{ color: "#FD2155" }}>Local Storage</div>
                            <a target="_blank" rel="noreferrer" href="https://github.com/jonathanprill/taskmaster-pro"><MdiGithub style={{ paddingTop: "12px" }} /></a>
                            <a target="_blank" rel="noreferrer" href="https://jonathanprill.github.io/taskmaster-pro/">
                                <h5 className="post-title">Taskmaster Pro</h5>
                            </a>
                            <div className="post-desc">To-do app inspired by Asana.</div>
                        </div>
                    </article>
                    <article className="project-article" style={{ borderTopColor: "#81D8F7" }}>
                        <div className="project-content">
                            <div className="post-data" style={{ color: "#81D8F7" }}>mySQL &amp; Node</div>
                            <a target="_blank" rel="noreferrer" href="https://github.com/jonathanprill/hacker-forum"><MdiGithub style={{ paddingTop: "12px" }} /></a>
                            <a target="_blank" rel="noreferrer" href="https://nameless-sands-05757.herokuapp.com/">
                                <h5 className="post-title">Hacker Forum</h5>
                            </a>
                            <div className="post-desc">Town square for developers inspired by Reddit.</div>
                        </div>
                    </article>
                    <article className="project-article" style={{ borderTopColor: "orange" }}>
                        <div className="project-content">
                            <div className="post-data" style={{ color: "orange" }}>HTML &amp; CSS</div>
                            <a target="_blank" rel="noreferrer" href="https://github.com/jonathanprill/run-buddy"><MdiGithub style={{ paddingTop: "12px" }} /></a>
                            <a target="_blank" rel="noreferrer" href="https://jonathanprill.github.io/run-buddy/">
                                <h5 className="post-title">Run Buddy</h5>
                            </a>
                            <div className="post-desc"> Polished landing page for growing company.</div>
                        </div>
                    </article>
                </div>
            </section>

            <hr className="section-line-right" id="section-lines" />

            <section id="contact-section" className="section-contact">



                <div className="text-zone">
                    <h2>Contact Me</h2>
                    <p>
                        I am currently looking for opportunities ranging from freelance to full time employment.
                        Please reach out if you're looking for a hard working web developer or if have any questions.
                        See my social links below or email me at <a href="mailto:jonathantprill@gmail.com"
                            className="email-text">jonathantprill@gmail.com.</a>
                    </p>
                    <section className="contact-photo">

                    </section>
                </div>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/jonathan-prill-49423672/" className="fa fa-linkedin"> </a>
                    <a href="https://github.com/jonathanprill"><i className="fa fa-github"
                        style={{ fontSize: "32px" }}></i></a>
                    <a href="mailto:jonathantprill@gmail.com" className="fa fa-google"> </a>
                </div>

            </section>

            <hr className="section-line-left" id="section-lines" />

            <footer>
                <p>
                    Made with ❤️ by Jonathan Prill &copy; 2022
                </p>
            </footer>
        </div>
    )
}

export default DarkTheme;