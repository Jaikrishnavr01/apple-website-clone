import React from 'react';

function DisplaySection({ triggerPreview }) {
    const handleScrollToTop = () => {
        const scrollDuration = 2000; // Duration in milliseconds
        const scrollStep = -window.scrollY / (scrollDuration / 15); // Step size

        const scrollAnimation = () => {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
                requestAnimationFrame(scrollAnimation);
            }
        };

        setTimeout(() => {
            requestAnimationFrame(scrollAnimation);
        }, 1000); // 1000ms delay
    };

    return (
        <div className='display-section wrapper'>
            <h2 className="title">New</h2>
            <p className='text'>Brilliant.</p>
            <span className='description'>
                A display that's up to 2x brighter in the sun.
            </span>
            <button className='button' onClick={triggerPreview}>Try me!</button>
            <button className='back-button' onClick={handleScrollToTop}>Top</button>
        </div>
    );
}

export default DisplaySection;
