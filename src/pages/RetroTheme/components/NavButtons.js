import React from 'react';


function NavButtons({ currentPage, handlePageChange }) {

    // Nav buttons which will render on top of TV buttons
    return (

        <div className='tv-buttons'>
            <button type="button" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'button-1  active' : 'button-1 '}></button>
            <button type="button" onClick={() => handlePageChange('Skills')} className={currentPage === 'Skills' ? 'button-2  active' : 'button-2 '}></button>
            <button type="button" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'button-3  active' : 'button-3 '}></button>
            <button type="button" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'button-4 active' : 'button-4'}></button>
        </div>
    )
}

export default NavButtons