import React from 'react';

const BaseURL = 'https://random-d.uk/api/http/418';

/**
 * Pinta el error not found de la API de patitos al encontrar la página (CUAK)
 */

function Teapot () {
    return (
        <div>
        <img alt='Pato418' src={BaseURL}/>
        </div>
    );
};

export default Teapot;
