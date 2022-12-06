import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {

    const { _id,img,service_name ,details, price} = product;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
            <PhotoProvider>
                <PhotoView src={img}>
                <figure ><img className='w-96 h-60' src={img} alt="Shoes" /></figure>
                </PhotoView>
            </PhotoProvider>
            
            <div className="card-body">
                <h2 className="card-title">{service_name}</h2>
                <p>{
                    details.length>100? details.slice(0,100) : details
                }</p>
                <p>{price}</p>
                <div className="card-actions justify-end">
                <Link to={`/services/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
        
        </div>
        
    );
};

export default ProductCard;