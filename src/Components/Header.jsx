import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../Providers/AuthProviders';

const Header = () => {
    const {user, logOut} = useContext(userContext);

    const handleSignOut = () => {
        logOut()
        .then(() => {})
        .catch(error => {
            console.log(error.message)
        })
    }
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content flex justify-between">
                <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
                <div>
                    <Link className="btn btn-ghost normal-case text-lg" to="/">Home</Link>
                    <Link className="btn btn-ghost normal-case text-lg" to="/login">Login</Link>
                    <Link className="btn btn-ghost normal-case text-lg" to="/register">Register</Link>
                </div>
                <div>
                    {
                        user ? <div className='flex justify-between items-center gap-2'><p className='text-xs'>{user.email}</p> <Link onClick={handleSignOut} className="btn btn-xs normal-case" to="/login">Sign out</Link></div> : <Link className="btn btn-ghost normal-case text-lg" to="/login">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;