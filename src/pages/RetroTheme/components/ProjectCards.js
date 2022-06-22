import React from 'react';
import Tilt from 'react-vanilla-tilt'

function ProjectCards() {

    // array of project cards that will populate on screen
    const cardInfo = [
        { languages: 'APIs and mySQL', title: 'Spray Can', desc: 'Discover and tag your favorite street art.', gitlink: 'https://github.com/jonathanprill/spray-can-project-2', link: 'https://enigmatic-cliffs-72783.herokuapp.com/', class: 'spray-can  card-image' },
        { languages: 'MERN and GraphQL', title: 'Vegeta', desc: 'Improve your online presence with this website builder.', gitlink: 'https://github.com/DevJonTaylor/code-vegeta', link: 'https://code-vegeta.herokuapp.com/', class: 'vegeta  card-image' },
        { languages: 'APIs and JS', title: 'Chess Master', desc: 'Take your chess game to the next level.', gitlink: 'https://github.com/jowstafford/ChessMaster', link: 'https://jowstafford.github.io/ChessMaster/', class: 'chessmaster card-image' },
        { languages: 'Local Storage and jQuery', title: 'Taskmaster Pro', desc: 'To-do app inspired by Asana.', gitlink: 'https://github.com/jonathanprill/taskmaster-pro', link: 'https://jonathanprill.github.io/taskmaster-pro/', class: 'taskmaster card-image' },
        { languages: 'mySQL and Node', title: 'Hacker Forum', desc: 'Public square for coders.', gitlink: 'https://github.com/jonathanprill/hacker-forum', link: 'https://nameless-sands-05757.herokuapp.com/', class: 'hacker-forum card-image' },
        { languages: 'APIs and JS', title: 'Weather Dashboard', desc: 'Check your local weather.', gitlink: 'https://github.com/jonathanprill/weather-dashboard', link: 'https://jonathanprill.github.io/weather-dashboard/', class: 'weather card-image' },
        { languages: 'MERN', title: 'Deep Thoughts', desc: 'Full stack Mern application featuring GraphQL.', gitlink: 'https://github.com/jonathanprill/deep-thoughts', link: 'https://mysterious-ocean-45457.herokuapp.com/', class: 'deep-thoughts card-image' }
    ]

    // card structure
    const renderCard = (card, index) => {
        return (
            <Tilt

                style={{
                    width: ''
                }}

                key={index}
            >
                <a className='card-link' target='_blank' rel="noopener noreferrer" href={card.link}>
                    <div className="project-card rgb">

                        <div className={card.class}></div>
                        <div className="card-text">
                            <span className="date">{card.languages}</span>
                            <h2 className="card-title">{card.title}</h2>
                            <p className='retro-p '>{card.desc}</p>
                        </div>

                        <div className='card-stats'>
                        <object>
                            <a target='_blank' rel="noopener noreferrer" href={card.gitlink}>
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="iconify iconify--mdi" width="38" height="38" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="#a7a7a7" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"></path></svg>
                            </a>
                            </object>
                        </div>

                    </div>
                </a>
            </Tilt>
        )
    }

    return (

        <section className="section-project">
            <div className="project-articles">
                {/* map through array above */}

                {cardInfo.map(renderCard)}
            </div>
        </section>
    )
}

export default ProjectCards;