import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './../../Context/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
   const {user, loading} = useContext(AuthContext); 
   const location = useLocation(); 
   if(loading){
      return <div className='flex items-center justify-center h-screen w-full'>
         <h1 className='text-5xl text-red-500 text-semibold '>Loading.........</h1>
      </div>
   }
   if(user){
     return children; 
   }
   return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;