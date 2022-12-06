import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { setAuthToken } from '../../api/auth';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const SignUp = () => {
    useTitle('Sign Up');

    const {createUser, updateUserProfile} = useContext(AuthContext);
    const [error, setError] = useState('');
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                setError('');
                setAuthToken(user);
                console.log(user);
                form.reset();
                
                
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }
    return (
        <div className="hero w-full bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                
                <div onSubmit={handleSignUp} className="card flex-shrink-0 w-full max-w-screen-md shadow-2xl bg-base-100">
                    <form className="card-body">
                    <h2 className="text-4xl text-center font-semibold pb-2">Sign Up your account </h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Sign Up</button>
                        </div>
                        
                    </form>
                    <p className='text-center'>New to Quick Snap?  <Link className='text-orange-600 font-bold' to="/login"> Login</Link> </p>
                    
                        
                </div>
            </div>
        </div>
    );
};

export default SignUp;