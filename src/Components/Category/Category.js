import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../App';
import CategoryDetail from '../CategoryDetail/CategoryDetail';

const AllProducts = [{name: 'Lenovo', category: 'laptop'},{name: 'Asus', category: 'laptop'},{name: 'Dell', category: 'laptop'},
{name: 'Samsung', category: 'mobile'},{name: 'Nokia', category: 'mobile'},{name: 'Apple', category: 'mobile'},
{name: 'Cannon', category: 'camera'},{name: 'Nikkon', category: 'camera'},{name: 'Soni', category: 'camera'}
];

const Category = () => {
    const [category] = useContext(Context);
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const Something = AllProducts.filter(pd => pd.category === category.toLowerCase());
        setProduct(Something);
    },[category])

    return (
        <div>
            <h3>Category: {category}</h3>
            {
                product.map(pd => <CategoryDetail product = {pd}></CategoryDetail>)
            }
        </div>
    );
};

export default Category;
