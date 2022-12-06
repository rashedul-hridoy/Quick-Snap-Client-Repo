import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ProductCard from '../Home/Products/ProductCard';
import ServiceCard from './ServiceCard';

const Services = () => {
    useTitle('Services');
    const {loading} = useContext(AuthContext);

    const services = useLoaderData();
    if(loading){
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    }

    return (
        <div>
            <div className='text-center mt-10 mb-7'>
                
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
                
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                    }
            </div>
        </div>
    );
};

export default Services;