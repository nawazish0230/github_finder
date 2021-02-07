import React from 'react';
import spinner from './a.png';

const Spinner = () => {
    return (
        <div>
            <img src={spinner} alt="loading..." style={{width: '200px', margin: 'auto', display: 'block'}}/>
            {/* <h2>Hyaerr</h2> */}
        </div>
    );
}

export default Spinner;
