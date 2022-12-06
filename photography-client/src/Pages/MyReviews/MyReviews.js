import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import MyReviewDetails from './MyReviewDetails';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyReviews = () => {
    useTitle('My Reviews');

    const {user, logOut} =useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() =>{
        fetch(`https://photography-server-chi.vercel.app/myreviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('quick-token')}`
            }
        })
        .then(res => {
            if(res.status === 401 || res.status === 403){
                return logOut();
            }
            return res.json()
        })
        .then(data => {
            console.log(data)
            setReviews(data)
        })
    },[user?.email, logOut])

    const handleDelete = id =>{
        fetch(`https://photography-server-chi.vercel.app/myreviews/${id}`,{
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0) {
                toast('Deleted Succesfully');
                const remaining = reviews.filter(review => review._id !== id);
                setReviews(remaining);
            }
        })
    }

    return (
        <div>
            <div className='container p-2 mx-auto sm:p-4 text-gray-800'>
                    <div className='flex flex-col overflow-x-auto text-xs'>
                        <div className='flex text-left bg-gray-300'>
                            <div className='w-20 px-2 py-3 sm:p-3'>
                                Delete Review
                            </div>
                            <div className='w-32 px-2 py-3 sm:p-3'>
                                Service Name
                            </div>
                            <div className='flex-1 px-2 py-3 sm:p-3'>
                                Review
                            </div>
                            <div className='hidden w-24 text-right px-2 py-3 sm:p-3 sm:block'>
                                Edit Review
                            </div>
                        </div>
                        <div>
                            
                            {
                                reviews.length === 0 ?
                                <h1 className='text-center  text-3xl mt-10'>No reviews were added</h1>
                                :
                                reviews.map(review => <MyReviewDetails key={review._id} review={review} handleDelete={handleDelete}></MyReviewDetails> )
                            }
                        </div>

                    </div>

                </div>
                <ToastContainer/>
        </div>
    );
};

export default MyReviews;