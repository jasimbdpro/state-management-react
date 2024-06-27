import React, { useContext } from 'react';
import { CategoryContext } from '../App';

const Shipment = () => {
    const [category, setCategory] = useContext(CategoryContext)

    return (
        <div>

            <h2>This is Shipment</h2>
            <button onClick={() => setCategory(category + 1)}>Update From Shipment</button>
        </div>
    );
};

export default Shipment;