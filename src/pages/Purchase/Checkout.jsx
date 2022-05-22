import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { axiosPrivate } from '../../api/axiosPrivate'
import { auth } from '../../firebase/firebase.init'

const Checkout = ({ part }) => {
  const [user] = useAuthState(auth)
  const {
    name: productName,
    _id: productId,
    minimumQuantity,
    availableQuantity,
    price,
  } = part

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onChange' })

  // useEffect(() => {
  //   const subscription = watch((data) => {
  //     setTotalAmount(data.productQuantity * price)
  //     console.log()
  //   })
  //   return () => {
  //     subscription.unsubscribe()
  //   }
  // }, [watch, price])

  const onSubmit = (data) => {
    // const totalAmount = data.productQuantity * price
    const { productQuantity, ...rest } = data
    const convertedQuantity = Number(productQuantity)
    const totoalPrice = price * convertedQuantity

    const item = {
      ...rest,
      productQuantity: convertedQuantity,
      totoalPrice,
      paid: false,
    }

    const updateQuantity = availableQuantity - convertedQuantity
    axiosPrivate.post('/item', item).then((res) => {
      if (res.data?.acknowledged) {
        axiosPrivate.patch(`/part?id=${productId}`, {
          availableQuantity: updateQuantity,
        })
      }
    })

    reset()
  }

  return (
    <div className='form-container lg:relative top-1/2'>
      <h2 className='form-title'>checkout</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {
          //* username
        }
        <div className='input-wraper'>
          <label htmlFor='userName'>Name</label>
          <input
            className='input-box'
            value={user.displayName}
            readOnly
            type='text'
            {...register('userName')}
          />
        </div>
        {
          //* email
        }
        <div className='input-wraper'>
          <label htmlFor='userEmail'>Email</label>
          <input
            className='input-box'
            value={user.email}
            readOnly
            type='text'
            {...register('userEmail')}
          />
        </div>
        {
          //* product name
        }
        <div className='input-wraper'>
          <label htmlFor='productName'>Product Name</label>
          <input
            className='input-box'
            value={productName}
            readOnly
            type='text'
            {...register('productName')}
          />
        </div>
        {
          //* product id
        }
        <div className='input-wraper'>
          <label htmlFor='productId'>Product ID</label>
          <input
            className='input-box'
            value={productId}
            readOnly
            type='text'
            {...register('productId')}
          />
        </div>

        {
          //* product quantity
        }
        <div className='input-wraper'>
          <label htmlFor='productName'>Quantity</label>
          <input
            className='input-box'
            type='number'
            placeholder='enter quantity'
            {...register('productQuantity', {
              required: 'specify quantiy',
              min: {
                value: minimumQuantity,
                message: `least order amount is ${minimumQuantity}`,
              },
              max: {
                value: availableQuantity,
                message: `${availableQuantity} is highest available stock`,
              },
            })}
          />
          <p className='error-text'>{errors.productQuantity?.message}</p>
        </div>
        {
          //* address
        }
        <div className='input-wraper'>
          <label htmlFor='userAddress'>Enter Delivery Adress</label>
          <input
            className='input-box'
            type='text'
            placeholder='enter address'
            {...register('userAddress', {
              required: 'address is required',
            })}
          />
          <p className='error-text'>{errors.userAddress?.message}</p>
        </div>
        {
          //* phone number
        }
        <div className='input-wraper'>
          <label htmlFor='userContact'>Contact</label>
          <input
            className='input-box'
            placeholder='enter contact number'
            type='text'
            {...register('userContact', {
              required: 'contact number is required',
              pattern: {
                value: /^[0-9' ']+$/i,
                message: 'numbers only',
              },
            })}
          />
          <p className='error-text'>{errors.userContact?.message}</p>
        </div>

        <button type='submit' className='cta cta-primary'>
          complete purchase
        </button>
      </form>
    </div>
  )
}

export default Checkout
