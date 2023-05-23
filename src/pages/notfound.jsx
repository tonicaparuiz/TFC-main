import React from 'react';

const BaseURL = 'https://random-d.uk/api/http/404';

/**
 * Pinta el error not found de la API de patitos al encontrar la página (CUAK)
 */

function Notfound () {
    return (
        <div>
        <img alt='Pato404' src={BaseURL}/>
        </div>
    );
};

export default Notfound;
