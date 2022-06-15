import React from 'react';

function Projects() {

    // array of project cards that will populate on screen
    const cardInfo = [
        { languages: 'APIs and mySQL', title: 'Spray Can', desc: 'Discover and tag your favorite street art.', gitlink: 'https://github.com/jonathanprill/spray-can-project-2', link: 'https://enigmatic-cliffs-72783.herokuapp.com/', class: 'project-article spray-can' },
        { languages: 'APIs and JS', title: 'Chess Master', desc: 'Take your chess game to the next level.', gitlink: 'https://github.com/jowstafford/ChessMaster', link: 'https://jowstafford.github.io/ChessMaster/', class: 'project-article chessmaster' },
        { languages: 'Local Storage', title: 'Taskmaster Pro', desc: 'To-do app inspired by Asana.', gitlink: 'https://github.com/jonathanprill/taskmaster-pro', link: 'https://jonathanprill.github.io/taskmaster-pro/', class: 'project-article taskmaster' },
        { languages: 'mySQL and Node', title: 'Hacker Forum', desc: 'Public square for coders.', gitlink: 'https://github.com/jonathanprill/hacker-forum', link: 'https://nameless-sands-05757.herokuapp.com/', class: 'project-article hacker-forum' },
        { languages: 'APIs and JS', title: 'Weather Dashboard', desc: 'Check your local weather.', gitlink: 'https://github.com/jonathanprill/weather-dashboard', link: 'https://jonathanprill.github.io/weather-dashboard/', class: 'project-article weather' },
        { languages: 'Node and JS', title: 'README Generator', desc: 'Save time for busy developers.', gitlink: 'https://github.com/jonathanprill/README-Generator', link: 'https://drive.google.com/file/d/1AFmAA9VnlUAWVOUEvc40V26UtxTXJ3OB/view', class: 'project-article readme-gen' }
    ]

    // card structure
    const renderCard = (card, index) => {
        return (

            <article className={card.class} key={index}>
                <div className="project-content">
                    <div className="post-data">{card.languages}</div>
                    <a target='_blank' rel="noopener noreferrer" href={card.gitlink}>
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="iconify iconify--mdi" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"></path></svg>
                    </a>
                    <a target='_blank' rel="noopener noreferrer" href={card.link}>
                        <h5 className="post-title">{card.title}</h5>
                    </a>
                    <div className="post-desc">{card.desc}</div>
                </div>
            </article>

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
export default Projects;