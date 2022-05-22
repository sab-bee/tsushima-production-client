import React from 'react'

const SinglePart = ({ part }) => {
  const {
    name,
    image,
    description,
    minimumQuantity,
    availableQuantity,
    price,
  } = part
  return (
    <div className='part-body'>
      <div>
        <img src={image} alt='' />
        <div className='part-info'>
          <h2 className='part-title'>{name}</h2>
          <p className='part-detail'>{description}</p>
          mini
          <p className='part-price'>${price}</p>
        </div>
      </div>
      <button className='cta-secondary mt-auto'>place order</button>
    </div>
  )
}

export default SinglePart
