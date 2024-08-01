import React, { useContext } from 'react';
import Categories from '../Categories/Categories';
import { CategoryContext } from '../App';

const Home = () => {
    const category = useContext(CategoryContext)
    return (
        <div style={{ border: '1px solid gray' }}>
            <h2>This is home: {category}</h2>
            <Categories count={category}></Categories>
        </div>
    );
};

export default Home;