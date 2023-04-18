import React, { useContext } from 'react';
import { userContext } from '../Providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(userContext)
    if(loading){
        return <progress className="progress w-56"></progress>;
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" replace={true} ></Navigate>;
};

export default PrivateRoutes;