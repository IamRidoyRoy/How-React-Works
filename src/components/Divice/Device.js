import React from 'react';

const Device = (props) => {
    return (
        <div>
            <h2>My device name is : {props.name}</h2>
            <h2>Price: {props.price} </h2>
        </div>
    );
};

export default Device;