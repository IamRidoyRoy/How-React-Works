import React, { useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0)

    const increaseSteps = () => setSteps(steps + 1);
    console.log(steps);

    return (
        <div style={{ border: '2px solid purple', margin: '20px' }}>
            <h2>My foot step is : {steps} </h2>
            <button onClick={increaseSteps} >De Dour.............</button>
            <Display name='Germin' steps={steps}></Display>

        </div>
    );
};

export default Watch;