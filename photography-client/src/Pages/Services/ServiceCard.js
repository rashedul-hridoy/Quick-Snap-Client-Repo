import React, { useContext } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ServiceCard = ({service}) => {
    const {img,service_name ,details, price,_id} = service;
    const {setLoading} = useContext(AuthContext);
    setLoading(false);
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

export default ServiceCard;