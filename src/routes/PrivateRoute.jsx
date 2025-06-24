import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../Hooks/useAuth';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    
    if(loading){
        return <span className="loading loading-bars loading-xl"></span>;
    }

    if(!user){
        return <Navigate to="/login" state={location.pathname}></Navigate>
    }

    return children;
};

export default PrivateRoute;