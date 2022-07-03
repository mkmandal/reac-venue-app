import React from 'react';
import Carrousel from './Carrousel';
import Timeuntil from './Timeuntil';

const Features = () => {
    return (
        <div style={{position:"relative"}}>

            <Carrousel></Carrousel>
            <div className="artist_name">
                <div className='wrapper'>
                    Anjelina jolly
                </div>
            </div>

            <Timeuntil></Timeuntil>
            
        </div>
    );
};

export default Features;



