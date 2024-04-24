import React, { useContext } from 'react'
import { AuthContext } from './Authprovider';
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
    const {logout} = useContext(AuthContext);
    const location = useLocation();
    const navigator = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogout = () => {
        logout().then(()=>{
            alert('logout successful');
            navigator(from, { replace: true });
        }).catch(err => {

        })
    };
  return (
    <div className='h-screen bg-cyan-100 flex items-center justify-center'>
        <button onClick={handleLogout} className=' bg-red-700 px-8 py-3 text-white rounded-lg'>Logout</button>
    </div>
  )
}

export default Logout