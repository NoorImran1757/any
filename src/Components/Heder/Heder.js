import React, { useContext } from 'react';
import { Context } from '../../App';

const Heder = () => {
    const [category, setCategory] = useContext(Context);
    return (
        <div>
            <h2>This is Header:{category}</h2>
            <button onClick={() => setCategory('Laptop')}>laptop</button>
            <button onClick={() => setCategory('Mobile')}>mobile</button>
            <button onClick={() => setCategory('Camera')}>camera</button>
        </div>
    );
};

export default Heder;
