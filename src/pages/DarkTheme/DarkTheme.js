import React from "react";
import "./index.css";
import { MaterialSymbolsArrowDownward, MdiGithub } from "../../components/Symbols";

function DarkTheme() {
    return (
        <div className="dark-theme">
            <section class="section-full section-title">
                <nav>
                    <ul>
                        <li><a href="#about-section">About</a></li>
                        <li><a href="#project-section">Projects</a></li>
                        <li><a href="#contact-section">Contact</a></li>
                    </ul>
                </nav>
                <div class="titles">
                    <div class="title-block-1">
                        <h1 class="first-name">Jonathan</h1>
                        <h1 class="last-name">-------Prill</h1>
                    </div>
                    <div class="title-block-2">
                        <h1 class="first-name">WEB--------</h1>
                        <h1 class="last-name">DEVELOPER</h1>
                    </div>
                </div>
            </section>

            <hr class="section-line-right" id="section-lines" />

            <section id="about-section" class="section-bio">

                <div class="text-zone">
                    <h2>About Me</h2>
                    <p>
                        Being a mechanical engineer for about a decade I realized most of my enjoyment came from working with software.
                        From programming automated machinery to managing complex parametric databases, my passion for computation continued to grow.

                        During the pandemic I had time to rethink my trajectory and soon realized it was time to pursue my true interest of computers, how they worked, and how to write code.

                        Taking the Full-Stack Web Development course at UT Austin has truly ignited a passion and curiosity for
                        the art of coding. I look forward to turning this passion into a profession.
                    </p>
                </div>
                <section class="resume">
                    <a href='Jonathan-Prill-Resume.pdf' download='Jonathan Prill Resume' target="_blank">Download Resume</a>
                </section>
                <section class="skills">
                    <div class="skills-icons html-icon">
                     
                    </div>
            
                
               
                  
                </section>


                <div class="scroll-down">
                    <span>Scroll Down</span>
                    <MaterialSymbolsArrowDownward />
                    
                </div>
            </section>

            <hr class="section-line-left" id="section-lines" />

            <section id="project-section" class="section-project">
                <div class="project-articles">
                    <article class="project-article" style={{borderTopColor:"#FD2155"}}>
                        <div class="project-content">
                            <div class="post-data" style={{color:"#FD2155"}}>MERN &amp; GraphQL</div>
                            <a href="https://github.com/DevJonTaylor/code-vegeta"><MdiGithub style={{paddingTop:"12px"}}/></a>
                            <a href="https://code-vegeta.herokuapp.com/">
                                <h5 class="post-title">Vegeta</h5>
                            </a>
                            <div class="post-desc">Build your online presence.</div>
                        </div>
                    </article>
                
              
                 
                  
                
            

                </div>
            </section>

            <hr class="section-line-right" id="section-lines" />

            <section id="contact-section" class="section-contact">



                <div class="text-zone">
                    <h2>Contact Me</h2>
                    <p>
                        I am currently looking for opportunities ranging from freelance to full time employment.
                        Please reach out if you're looking for a hard working web developer or if have any questions.
                        See my social links below or email me at <a href="mailto:jonathantprill@gmail.com"
                            class="email-text">jonathantprill@gmail.com.</a>
                    </p>
                    <section class="contact-photo">
                       
                    </section>
                </div>
                <div class="social-icons">
                    <a href="https://www.linkedin.com/in/jonathan-prill-49423672/" class="fa fa-linkedin"> </a>
                    <a href="https://github.com/jonathanprill"><i class="fa fa-github"
                        style={{fontSize: "32px"}}></i></a>
                    <a href="mailto:jonathantprill@gmail.com" class="fa fa-google"> </a>
                </div>

            </section>

            <hr class="section-line-left" id="section-lines" />

            <footer>
                <p>
                    Made with ❤️ by Jonathan Prill &copy; 2022
                </p>
            </footer>
        </div>
    )
}

export default DarkTheme;