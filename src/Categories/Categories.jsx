import React, { useContext, useEffect, useState } from 'react';
import CategoryDetail from '../CategoryDetail/CategoryDetail';
import { CategoryContext } from '../App';
const allProducts = [
    { name: 'Lenovo', category: 'laptop' },
    { name: 'Dell', category: 'laptop' },
    { name: 'Asus', category: 'laptop' },
    { name: 'Samsung', category: 'mobile' },
    { name: 'Oppo', category: 'mobile' },
    { name: 'Symphony', category: 'mobile' },
    { name: 'Canon', category: 'camera' },
    { name: 'Nikkon', category: 'camera' },
    { name: 'Sony', category: 'camera' },
]

const Categories = () => {
    const [category] = useContext(CategoryContext)
    const [products, setProducts] = useState([])
    useEffect(() => {
        const matchedProduct = allProducts.filter(i => i.category.toLowerCase() === category.toLowerCase())
        setProducts(matchedProduct)
    }, [category])

    return (
        <div>
            <h2>Select your categories: {category}</h2>
            {
                products.map(i => <CategoryDetail product={i}></CategoryDetail>)
            }
        </div>
    );
};

export default Categories;