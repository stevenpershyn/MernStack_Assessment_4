import React, { useState } from 'react';

function ProductComponent(){
    const [product, setProduct] = useState({
        name: '',
        price: '',
        description: '',
        rating: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        console.log('Submitted Product:', product);
    
        setProduct({
          name: '',
          price: '',
          description: '',
          rating: '',
        });
      };
    

    return (
        <div>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                type="text"
                id="name"
                name="name"
                value={product.name}
                onChange={handleInputChange}
                required
                />
            </div>
            <div>
                <label htmlFor="price">Price:</label>
                <input
                type="number"
                id="price"
                name="price"
                value={product.price}
                onChange={handleInputChange}
                required
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea
                id="description"
                name="description"
                value={product.description}
                onChange={handleInputChange}
                required
                />
            </div>
            <div>
                <label htmlFor="rating">Rating:</label>
                <input
                type="number"
                id="rating"
                name="rating"
                value={product.rating}
                onChange={handleInputChange}
                required
                />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
            </form>
        </div>
    );
}

export default ProductComponent;