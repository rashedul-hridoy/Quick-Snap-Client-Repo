import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddReview = () => {
    const { _id, service_name, img, price } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleAddReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const photoURL = form.photoURL.value;
        const reviewMessage = form.reviewMessage.value;
        const d = new Date();
        console.log(d);
        const review = {
            service: _id,
            serviceName: service_name,
            reviewer: name,
            email,
            photoURL,
            reviewMessage,
            time: d

        }
        fetch('https://photography-server-chi.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast('Your Review is Added');
                    form.reset();

                }
            })
            .catch(er => console.error(er));

    }
    return (
        <div>
            <form onSubmit={handleAddReview}>
                <h2 className="text-4xl">You are about to give review about: {service_name}</h2>
                <h4 className="text-3xl text-center">Price: {price}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 py-4'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" />
                    <input name="photoURL" type="text" placeholder="Your PhoTo" className="input input-ghost w-full  input-bordered" required />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                </div>
                <textarea name="reviewMessage" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>

                <input className='btn' type="submit" value="Add Your Review" />
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddReview;