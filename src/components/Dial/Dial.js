import React from 'react';

const Dial = (props) => {
    return (
        <div style={{ border: '2px solid blue', margin: '20px' }}>
            <h3>Dial : Number</h3>
            <p>So far steps: {props.steps} </p>
        </div>
    );
};

export default Dial;