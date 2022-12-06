import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import ReviewDetails from '../../ReviewDetails/ReviewDetails';

const ServiceDetails = () => {

    const [reviews, setReviews] = useState([]);
    const navigate = useNavigate();
    const { _id, service_name, price, img, rating, photographer, details } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleReview = () => {
        if (!user?.email) {
            alert('Please Login to Add review');

        }
        else {

            navigate(`/addreview/${_id}`)
        }
    }


    useEffect(() => {
        fetch(`https://photography-server-chi.vercel.app/reviews?service=${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])




    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{service_name}</h2>
                    <p className='font-semibold'>Price: {price}</p>
                    <p className='font-semibold'>Rating: {rating}</p>
                    {/* <p className='font-semibold'>Photographer: {photographer.name}</p> */}

                    <p>{details}</p>



                </div>
            </div>

            <div>
                <h1 className='mt-16 font-light text-4xl text-center'>Reviews</h1>
                <p>Review of people about our {service_name} service</p>
                <div className='container p-2 mx-auto sm:p-4 text-gray-800'>
                    <div className='flex flex-col overflow-x-auto text-xs'>
                        <div className='flex text-left bg-gray-300'>
                            <div className='w-20 px-2 py-3 sm:p-3'>
                                Image
                            </div>
                            <div className='w-32 px-2 py-3 sm:p-3'>
                                Reviewer
                            </div>
                            <div className='flex-1 px-2 py-3 sm:p-3'>
                                Review
                            </div>
                            <div className='hidden w-24 text-right px-2 py-3 sm:p-3 sm:block'>
                                rating
                            </div>
                        </div>
                        <div>
                            {
                                reviews.map(review => <ReviewDetails key={review._id} review={review}></ReviewDetails> )
                            }
                        </div>

                    </div>

                </div>
                <div className='text-center'>
                    <button onClick={handleReview} className="btn btn-primary">Add Review</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;