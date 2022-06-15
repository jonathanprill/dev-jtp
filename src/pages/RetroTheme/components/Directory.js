import React from 'react';


function Directory({ currentPage, handlePageChange }) {


    // Directory with contact info, will always render at very bottom of page
    return (

        <div className='directory'>
            
                <button type="button" onClick={() => handlePageChange('About')}>About Me</button>
                <button type="button" onClick={() => handlePageChange('Skills')}>Skills</button>
                <button type="button" onClick={() => handlePageChange('Portfolio')}>Projects</button>
                <a href="mailto:jonathantprill@gmail.com" target="blank">Contact Me</a>
                <a href='Jonathan-Prill-Resume.pdf' download={'Jonathan Prill Resume'}>Download Resume</a>
            
        </div>
    )
}

export default Directory;