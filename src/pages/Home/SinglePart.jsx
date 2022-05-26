import React from 'react'
import { useNavigate } from 'react-router-dom'

const SinglePart = ({ part }) => {
  const {
    name,
    image,
    description,
    minimumQuantity,
    availableQuantity,
    price,
    _id,
  } = part

  const navigate = useNavigate()

  return (
    <div className='part '>
      <div className='part-body '>
        <img className='w-3/5 mx-auto' src={image} alt='' />
        <div className='part-info'>
          <h2 className='part-title'>{name}</h2>
          <p className='part-detail'>{description.slice(0, 200) + '...'}</p>
          <p className='part-price'>${price}</p>
          <p>available : {availableQuantity} pieces</p>
          <p>minimum {minimumQuantity} order acceptable</p>
        </div>
      </div>
      <div className='mt-auto text-center pb-5'>
        <button
          onClick={() => navigate(`/purchase/${_id}`)}
          className='cta cta-secondary w-fit rounded-full py-3 px-5'
        >
          place order
        </button>
      </div>
    </div>
  )
}

export default SinglePart
