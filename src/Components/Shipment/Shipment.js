import React, { useContext } from 'react';
import { Context } from '../../App';

const Shipment = () => {
    const [category, setCategory] = useContext(Context)
    return (
        <div>
            <h2>This is Shipment</h2>
            <button onClick={()=> setCategory(category + 1)}>Increment function</button>
        </div>
    );
};

export default Shipment;

