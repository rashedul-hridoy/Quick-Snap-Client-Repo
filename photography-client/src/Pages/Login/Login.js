import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import {FaGoogle} from 'react-icons/fa';
import useTitle from '../../hooks/useTitle';
import { setAuthToken } from '../../api/auth';

const Login = () => {
    useTitle('Login');

    const {googleProviderLogin,signIn, setLoading} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const [error, setError] = useState('');

    const handleGoogleSignIn = () =>{
        googleProviderLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error =>{
            console.error(error);
        })
    }

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
                setAuthToken(user);
                navigate(from, { replace: true });
            
            
        })
        .catch(error => {
            console.error(error);
            setError(error.message);
        })
        .finally(() => setLoading(false))

    }
    return (
        <div className="hero w-full bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                
                <div onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-screen-md shadow-2xl bg-base-100">
                    <form className="card-body">
                    <h2 className="text-4xl text-center font-semibold pb-2">Login to your account </h2>
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
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>
                        
                    </form>
                    <p className='text-center'>New to Quick Snap?  <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
                    <div className="flex items-center w-full my-4">
		                    <hr className="w-full dark:text-gray-400"/>
		                    <p className="px-3 dark:text-gray-400">OR</p>
		                    <hr className="w-full dark:text-gray-400"/>
	                    </div>
                        <div className="mt-6 form-control">
                        <button onClick={handleGoogleSignIn} className=" btn btn-active btn-accent"><FaGoogle></FaGoogle> <span className='ml-2'>Login with goggle</span></button>
		
	                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;