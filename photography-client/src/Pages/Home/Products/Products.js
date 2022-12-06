import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

const Products = () => {

    const [products, setProducts] = useState([]);
    useEffect(() =>{
        fetch('https://photography-server-chi.vercel.app/products')
        .then(res =>res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div >
            <div className='text-center mb-4 py-4'>
                
                <h2 className="text-5xl font-semibold text-orange-600">Our Services</h2>
                
            </div>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <ProductCard key={product._id}
                        product={product}></ProductCard>)
                        
                    
                }
            </div>
            <div className='py-10 text-center'>
                <Link to='/services'><button className="btn btn-wide">View All</button></Link>
            </div>
        </div>
    );
};

export default Products;