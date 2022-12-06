import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    const menuItems = <>
        <li className='font-semibold text-lg mr-5'><Link to='/'>Home</Link></li>
        <li className='font-semibold text-lg mr-5'><Link to='/services'>Services</Link></li>
        <>
            {
                user?.uid ?
                    <>
                        <li className='font-semibold text-lg mr-5'><Link to='/myreviews'>My Reviews</Link></li>
                        <li className='font-semibold text-lg mr-5'><Link to='/addservice'>Add Service</Link></li>
                        <li className='font-semibold text-lg mr-5'>
                            <button onClick={handleLogOut} className="btn btn-active btn-info">LogOut</button>
                        </li>
                    </>
                    :
                    <>
                        <li className='font-semibold text-lg mr-5'>
                            <Link to='/login'><button className="btn btn-active btn-info">Login</button></Link>
                        </li>
                        <li className='font-semibold text-lg mr-5'>
                            <Link to='/signup'><button className="btn btn-active btn-info">Sign Up</button></Link>
                        </li>
                    </>
            }
        </>


    </>
    return (
        <header className="p-4 bg-gray-800 text-gray-100">
            <div className="container flex justify-between h-16 mx-auto">
                <h1 className='flex items-center text-2xl text-white font-mono font-bold ml-10'>
                    <Link to='/'><button>QUICK SNAP</button></Link>
                </h1>
                <ul className="items-stretch  hidden space-x-3 lg:flex">

                    <div className='flex items-center px-4 -mb-1'>
                        {menuItems}
                    </div>
                    {/* <li className="flex">
                        <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-violet-400 border-violet-400">Link</a>
                    </li> */}

                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">

                <Link to='/blogs'><button className=" px-6 py-3 font-semibold rounded bg-teal-600 text-gray-50">Blogs</button></Link>
                </div>
                <div className="dropdown ">
                    <button className=" px-10 mr-10 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    <ul className="menu menu-compact dropdown-content mt-3 shadow bg-gray-800 rounded-box items-center">
                        {menuItems}
                        <div className='text-center'>

                            <Link to='/blogs'><button className=" px-6 py-3 font-semibold rounded bg-teal-600 text-gray-50">Blogs</button></Link>
                        </div>
                    </ul>

                </div>

            </div>
        </header>


    );
};

export default Header;