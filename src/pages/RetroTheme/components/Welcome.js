import React from 'react';

function Welcome() {

    return (
        <div className='card'>
            <h1>Welcome!</h1>
            <p className='welcome-text'>
                Use the buttons on the TV to switch through channels.
            </p>
            {/* Animated Arrow */}
            <div class="arrow bounce"></div>
        </div>
    )
}
export default Welcome;