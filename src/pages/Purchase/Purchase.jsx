import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { axiosPrivate } from '../../api/axiosPrivate'
import Checkout from './Checkout'
import Product from './Product'

const Purchase = () => {
  const { _id } = useParams()
  const {
    data: part,
    isLoading,
    refetch,
    isError,
  } = useQuery('part', () =>
    axiosPrivate(`/part/${_id}`).then((res) => res.data)
  )
  if (isLoading) return
  if (isError) return
  
  return (
    <div className='bg-white mb-[600px]'>
      <div className='box grid grid-cols-1 lg:grid-cols-2'>
        <Product part={part}></Product>
        <Checkout part={part}></Checkout>
      </div>
    </div>
  )
}

export default Purchase
