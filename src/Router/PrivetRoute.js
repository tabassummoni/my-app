import React, { useContext } from 'react';
import Loader from '../Page/Shared/Loader/Loader';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contex/AuthProvider';

const PrivetRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <Loader></Loader>
    }

    if (user?.email) {
        return children;
    }

    return (
        <div>
            <Navigate to='/login' state={{ from: location }} replace></Navigate>
        
        </div>
    );
};

export default PrivetRoute;