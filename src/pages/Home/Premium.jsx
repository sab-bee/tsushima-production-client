import React from 'react';
import toast from 'react-hot-toast';
import { BsFillCheckCircleFill } from "react-icons/bs";
import { axiosPrivate } from '../../api/axiosPrivate';

const Premium = () => {
  const handleMemebership = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    axiosPrivate.post(`/premium/${email}`).then((res) => {
      if (res.data?.message === 'exist') {
        toast('already a member', {
          id: 'existIdUnique'
        })
      }
      if (res.data?.acknowledged) {
        toast.success('you are a member now')
      }
    }).catch((err) => {
      if (err.response?.status === 401) {
        toast.error('you need to login once', {
          id: 'errorIdUnique'
        })
      }
    })
  }

  return (
    <div className='bg-white'>
      <div className='bg-white py-12 w-4/5 mx-auto border-t'>
        <h2 className='title-center my-4'>Premium membership</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:justify-items-center gap-8 '>
          <div>
            <h2 className='font-medium my-4'>Custom Parts</h2>
            <div className='flex gap-2'><span className='text-green-500'>
              <BsFillCheckCircleFill />
            </span><p>Design your own parts</p></div>
            <div className='flex gap-2'><span className='text-green-500'>
              <BsFillCheckCircleFill />
            </span><p>Add custom features</p></div>
            <div className='flex gap-2'><span className="text-green-500">
              <BsFillCheckCircleFill />
            </span><p>Customization of parts</p></div>
          </div>
          <div>
            <h2 className='font-medium my-4'>Service</h2>
            <div className='flex gap-2'><span className='text-green-500'>
              <BsFillCheckCircleFill />
            </span><p>Extend warranty period</p></div>
            <div className='flex gap-2'><span className='text-green-500'>
              <BsFillCheckCircleFill />
            </span><p>Replace 20% damaged parts </p></div>
            <div className='flex gap-2'><span className="text-green-500">
              <BsFillCheckCircleFill />
            </span><p>Refurbrishing parts</p></div>
          </div>
          <div>
            <h2 className='font-medium my-4'>Contract</h2>
            <div className='flex gap-2'><span className='text-green-500'>
              <BsFillCheckCircleFill />
            </span><p>Free delivery on 3 year contract</p></div>
            <div className='flex gap-2'><span className='text-green-500'>
              <BsFillCheckCircleFill />
            </span><p>Offer based on purchase</p></div>
            <div className='flex gap-2'><span className="text-green-500">
              <BsFillCheckCircleFill />
            </span><p>Get random deals</p></div>
          </div>
        </div>
        <form onSubmit={handleMemebership}>
          <div className='md:w-1/2 mx-auto mt-8 flex justify-center'>
            <input type="email" className='bg-gray-100 p-3 w-4/5 focus:outline-indigo-200' name='email' />
            <button type='submit' className='cta cta-primary w-1/5'>submit</button>
          </div>
        </form>
        <p className='text-center mt-4 underline'>see membership status</p>
      </div>
    </div>
  );
};

export default Premium;