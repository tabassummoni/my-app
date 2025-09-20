import React from 'react';
import useCart from '../../../hooks/useCart';
import { AiFillDelete } from "react-icons/ai";
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + (+item.price), 0)
  const axiosSecure = useAxiosSecure();
  //item delete
  const handleDelete = id => {
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

        axiosSecure.delete(`/cartItem/${id}`)
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
  const navigate = useNavigate();

  const handlePay = () => {
    navigate('/dashboard/payment', {
      state: {
        totalAmount: totalPrice,
        totalItems: cart.length
      }
    });
  };
  return (
    <div>
      <div className='flex justify-evenly mb-8'>
        <h2 className='text-2xl underline-offset-2 underline text-white font-bold' style={{ fontFamily: "serif" }}>Total Items: {cart.length} </h2>
        <h2 className='text-2xl underline-offset-2 underline text-white font-bold' style={{ fontFamily: "serif" }}>Total Price: {totalPrice} </h2>
        <button
          onClick={handlePay}
          className='text-white text-2xl'
          style={{ fontFamily: "serif" }}
        >
          Pay
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className='text-white text-lg' style={{ fontFamily: "serif" }}>
              <th>
                #
              </th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th >Action</th>
            </tr>
          </thead>
          <tbody className='text-white text-lg' style={{ fontFamily: "serif" }}>
            {cart.map((item, i) => <tr key={item._id}>
              <th>
                {i}
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold"></div>
                  </div>
                </div>
              </td>
              <td>
                {item.name}
                <br />
                {/* <span className="badge badge-ghost badge-sm">{item.details}</span> */}
              </td>
              <td>{item.price}</td>
              <th>
                <button onClick={() => handleDelete(item._id)}
                  className="btn btn-ghost btn-lg"><AiFillDelete className='text-red-700 justify-start' /></button>
              </th>
            </tr>)}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default Cart;