import React, { useState, useEffect } from 'react'
import Product from '../components/Product';

export default function Shop({ user, addToCart }) {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const res = await fetch('http://127.0.0.1:5000/api/products');
        const data = await res.json();
        if (data.status === 'ok') {
            setProducts(data.products)
        }
    };

    useEffect(() => { getProducts() }, [])

    return (
        <div>
            <h1>My Shop</h1>
            <div className="row">
                {products.map(p => <Product key={p.id} product={p} user={user} addToCart={addToCart}/>)}
            </div>
        </div>
    )
};