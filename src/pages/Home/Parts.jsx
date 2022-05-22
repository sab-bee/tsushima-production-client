import React from 'react'
import { useQuery } from 'react-query'
import { axiosPublic } from '../../api/axiosPublic'
import { useParts } from '../../hooks/useParts'
import SinglePart from './SinglePart'

const Parts = () => {
  const { parts, refetch, isLoading } = useParts()
  if (isLoading) return

  return (
    <div className='parts-container'>
      <h2 className='title-center'>parts</h2>
      <div className='part-cols'>
        {parts.data.map((part) => (
          <SinglePart key={part._id} part={part} />
        ))}
      </div>
    </div>
  )
}

export default Parts
