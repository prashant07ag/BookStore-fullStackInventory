import React, { useContext } from 'react'
import { Spinner } from 'flowbite-react';
import { AuthContext } from '../component/Authprovider'
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()
    if(loading){
        return <div className='text-center'>
            <Spinner aria-label="center-aligned spinner example"></Spinner>
        </div>
    }

    if(user)
    {
        return children;
    };
    return <Navigate to="/login" state={location} replace></Navigate>
}

export default PrivateRoute