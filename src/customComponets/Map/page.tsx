// pages/MapPage.js
import React from 'react';

const MapPage = () => {
    // Replace the following coordinates with your desired default location
    const defaultLatitude = 30.734049;
    const defaultLongitude = 76.788910;

    return (

        <div className="relative w-full h-96">
            <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d${defaultLongitude}!3d${defaultLatitude}!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus`}
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen={false}
                aria-hidden="false"
                tabIndex={0}
            ></iframe>
        </div>

    );
};

export default MapPage;
