import React from 'react';

const CategoryDetail = (props) => {
    const {name} = props.product;
    return (
        <div>
            <h2>Name:{name}</h2>
        </div>
    );

};

export default CategoryDetail;
