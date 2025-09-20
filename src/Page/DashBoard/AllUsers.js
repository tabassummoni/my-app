import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { AiFillDelete } from 'react-icons/ai';
import { FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useReducedMotion } from 'framer-motion';

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users',{
        headers: {
          authorization : `Bearer ${localStorage.getItem('access-token')}`
        }
      });
      return res.data;
    }
  })
  //Admin
  const handleMakeAdmin = user => {
    axiosSecure.patch(`/users/admin/${user._id}`)
      .then(res => {
        console.log(res.data)
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now ..`,
            showConfirmButton: false,
            timer: 1500
          });

        }
      })
  }

  //delete User    
  const handleDelete = user => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        axiosSecure.delete(`/users/${user._id}`)
          .then(res => {
            console.log(res);
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          })
      }
    });

  }
  return (
    <div>
      <div className='flex  justify-evenly'>
        <h2 className='text-xl '>𝐀𝐥𝐥 𝐔𝐬𝐞𝐫𝐬</h2>
        <h2 className='text-xl '>𝐓𝐨𝐭𝐚𝐥 𝐔𝐬𝐞𝐫𝐬: {users.length}</h2>

      </div>
      <div>
        <div className="overflow-x-auto ">
          <table className="table table-zebra ">
            {/* head */}
            <thead>
              <tr className=''>
                <th style={{ fontFamily: 'serif' }} className='text-xl font-bold text-white'></th>
                <th style={{ fontFamily: 'serif' }} className='text-xl font-bold text-white'>Name</th>
                <th style={{ fontFamily: 'serif' }} className='text-xl font-bold text-white'>Email</th>
                <th style={{ fontFamily: 'serif' }} className='text-xl font-bold text-white '>Role</th>
                <th style={{ fontFamily: 'serif' }} className='text-xl font-bold text-white'>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((user, i) => <tr key={user._id}>

                  <th>{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)}
                      className="btn btn-ghost btn-lg"><FaUsers className='text-white mr-24 justify-start' />
                    </button>}

                  </td>
                  <td>
                    <button onClick={() => handleDelete(user)}
                      className="btn btn-ghost btn-lg"><AiFillDelete className='text-red-700 justify-start mr-24' />
                    </button>
                  </td>

                </tr>)}

            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default AllUsers;