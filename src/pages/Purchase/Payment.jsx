import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { axiosPrivate } from '../../api/axiosPrivate'
import CheckoutForm from './CheckoutForm'

const stripePromise = loadStripe(
  'pk_test_51L1Dp8J48oi4JQCJngh2eIDVprg1z8uRziP6OqMWowsDcPLfOfAikPLhWyPqjDuG3lnyh8p3vjf6gRAZHjM8SFzn00FkVLnBj3'
)

const Payment = () => {
  const { _id } = useParams()
  const {
    data: order,
    isLoading,
    refetch,
  } = useQuery(['payment', _id], () =>
    axiosPrivate(`/order/${_id}`).then((res) => res.data)
  )

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  if (isLoading) return

  //! console.log(order)
  return (
    <div className='grid justify-items-center'>
      <div className=' bg-white shadow-md'>
        <div className='card-body items-center text-center'>
          <h2 className='card-title text-secondary'>
            Please pay $ {order?.totalPrice}
          </h2>
          <p>Once you complete payment you can't cancel order</p>
        </div>
        <div className='form-container'>
          <form>
            <div className='input-wraper'>
              <label htmlFor=''>Product Name</label>
              <input
                className='input-box'
                type='text'
                value={order.productName}
                readOnly
                {...register('productName')}
              />
            </div>
            <div className='input-wraper'>
              <label htmlFor=''>Product ID</label>
              <input
                className='input-box'
                type='text'
                value={order.productId}
                readOnly
                {...register('productId')}
              />
            </div>
            <div className='input-wraper'>
              <label htmlFor=''>Quantity</label>
              <input
                className='input-box'
                type='text'
                value={order.productQuantity}
                readOnly
                {...register('productQuantity')}
              />
            </div>
          </form>
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  )
}

export default Payment
