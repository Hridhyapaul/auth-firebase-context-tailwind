import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content flex justify-between">
                <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
                <div>
                    <Link className="btn btn-ghost normal-case text-lg" to="/">Home</Link>
                    <Link className="btn btn-ghost normal-case text-lg" to="/login">Login</Link>
                    <Link className="btn btn-ghost normal-case text-lg" to="/register">Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;