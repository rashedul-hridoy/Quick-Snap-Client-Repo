import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const EditReview = () => {

    const {logOut} = useContext(AuthContext);

    const {_id, service, serviceName} = useLoaderData();

    const handleEditReview = event =>{
        event.preventDefault();
        const form = event.target;
        const reviewMessage = form.reviewMessage.value;
        console.log(reviewMessage);
        
        fetch(`https://photography-server-chi.vercel.app/reviews/${_id}`, {
            method: 'PATCH', 
            headers: {
                'content-type': 'application/json',
                
            },
            body: JSON.stringify({msg: reviewMessage})
        })
        .then(res => {
            
            return res.json()
        })
        .then(data => {
            console.log(data);
            if(data.modifiedCount>0){
                toast('modified review');
                form.reset();
            }
        })
    }
    return (
        <div>
            <form onSubmit={handleEditReview}>
                <h2 className="text-3xl text-center py-4">You are about to Edit a Review</h2>
                
                
                <textarea name="reviewMessage" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>

                <input className='btn' type="submit" value="Edit Review" />
            </form>
            <ToastContainer/>
        </div>
    );
};

export default EditReview;