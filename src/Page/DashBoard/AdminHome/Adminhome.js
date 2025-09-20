import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const Adminhome = () => {
    const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const res = await fetch('http://localhost:4000/orders');
      const data = await res.json();
      setOrders(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleConfirm = async (orderId) => {
   try {
    const res = await fetch(`http://localhost:4000/orders/${orderId}/confirm`, {
      method: 'PATCH',
    });
    const data = await res.json();

    if (data.modifiedCount > 0) {
      // Update UI: change status and disable button
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId
            ? { ...order, status: 'confirmed', confirmed: true }
            : order
        )
      );
      Swal.fire('Success!', 'Order confirmed ✅', 'success');
    } else {
      Swal.fire('Error!', 'Failed to confirm order', 'error');
    }
  } catch (err) {
    console.error(err);
    Swal.fire('Error!', 'Network error', 'error');
  }
};

  const totalOrders = orders.length;
  const totalConfirmed = orders.filter((o) => o.confirmed).length;

    return (
        <div>
            <div className='justify-evenly flex'>
                 <h1 className='text-center text-3xl underline text-white'>𝐂𝐥𝐢𝐞𝐧𝐭 𝐎𝐫𝐝𝐞𝐫𝐬</h1>
          
            </div>
        <div className="p-8">
      {/* Total Orders Section */}
      <div className="mb-6 p-4 bg-gray-100 rounded-lg shadow flex justify-between">
        <h2 className="text-lg font-bold">𝐓𝐨𝐭𝐚𝐥 𝐎𝐫𝐝𝐞𝐫 : {totalOrders}</h2>
        <h2 className="text-lg font-bold text-green-600">
          𝐂𝐨𝐧𝐟𝐢𝐫𝐦𝐞𝐝: {totalConfirmed}
        </h2>
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">#</th>
              <th className="border p-2">User Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Phone</th>
              <th className="border p-2">Total Amount</th>
              <th className="border p-2">Payment Method</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id} className={order.confirmed ? 'bg-gray-100 text-gray-400' : ''}>
                <td className="border p-2">{index + 1}</td>
                <td className="border p-2">{order.userName}</td>
                <td className="border p-2">{order.email}</td>
                <td className="border p-2">{order.phone}</td>
                <td className="border p-2">{order.totalAmount} TK</td>
                <td className="border p-2">{order.paymentMethod}</td>
                <td className="border p-2">{order.status}</td>
                <td className="border p-2">
                  <button
                    disabled={order.confirmed}
                    onClick={() => handleConfirm(order._id)}
                    className={`px-3 py-1 rounded ${
                      order.confirmed
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    {order.confirmed ? 'Confirmed' : 'Confirm Order'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>   
        </div>
    );
};

export default Adminhome;