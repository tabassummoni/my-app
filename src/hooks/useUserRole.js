import React, { useContext } from 'react';
import { AuthContext } from '../contex/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useUserRole = () => {
    const { user, loading:authLoading } = useContext(AuthContext);
    console.log(user)
    const axiosSecure = useAxiosSecure();

    const {
        data: role = 'user',
        isLoading: roleLoading,
        refetch,
    } = useQuery({
        queryKey: ['useRole', user?.email],
        enabled:!authLoading && !!user?.email,
        
        queryFn:async()=>{
            const res = await axiosSecure.get(`/users/${user.email}/role`);
            return res.data.role;
        },
    })
    return {role, roleLoading:authLoading || roleLoading,refetch}
   
};

export default useUserRole;