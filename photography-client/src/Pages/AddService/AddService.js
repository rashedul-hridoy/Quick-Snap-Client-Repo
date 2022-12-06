import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddService = () => {
    useTitle('Add Service');

    const { user } = useContext(AuthContext);
    const [services, setServices] = useState([]);
    const handleService = event => {
        event.preventDefault();
        const form = event.target;
        const service_name = form.service_name.value;
        const img = form.img.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const details = form.details.value;

        const service = {
            service_name,
            img,
            price,
            rating,
            details
        }
        fetch('https://photography-server-chi.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                     toast("Service Added");
                    form.reset();
                }
            })
    }
    return (
        <div>
            <form onSubmit={handleService}>
                <h2 className="text-3xl text-center">You are about to add a service</h2>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 py-4'>
                    <input name="service_name" type="text" placeholder="Service Name" className="input input-ghost w-full  input-bordered" required />
                    <input name="img" type="text" placeholder="Image" className="input input-ghost w-full  input-bordered" required />
                    <input name="rating" type="text" placeholder="Rating" className="input input-ghost w-full  input-bordered" required />
                    <input name="price" type="text" placeholder="Price" className="input input-ghost w-full  input-bordered" required />
                </div>
                <textarea name="details" className="textarea textarea-bordered h-24 w-full" placeholder="Full Description" required></textarea>

                <input className='btn' type="submit" value="Add Your Service" />
            </form>
            
                
                <ToastContainer />
            
        </div>
    );
};

export default AddService;