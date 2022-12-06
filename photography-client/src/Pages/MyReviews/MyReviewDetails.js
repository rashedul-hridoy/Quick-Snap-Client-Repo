import React from 'react';
import { Link } from 'react-router-dom';

const MyReviewDetails = ({review, handleDelete}) => {
    const {serviceName, reviewMessage ,_id } = review;
    return (
        <div className='flex border-b border-opacity-20 border-gray-300 bg-gray-50'>
            <div className='w-20 px-2 py-3 mr-2 sm:p-3'>
                <button onClick={() => handleDelete(_id)} className="btn btn-error">Delete</button>
            </div>
            <div className='w-32 px-2 py-3 sm:p-3'>
                <p>{serviceName}</p>
            </div>
            <div className='flex-1 px-2 py-3 sm:p-3'>
                <p>{reviewMessage}</p>
            </div>
            <div className='hidden w-24 text-right px-2 py-3 sm:p-3 sm:block'>
                <Link to={`/editreview/${_id}`}><button className="btn btn-info">Edit</button></Link>
            </div>
        </div>
    );
};

export default MyReviewDetails;