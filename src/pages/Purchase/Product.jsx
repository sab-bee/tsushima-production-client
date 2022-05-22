const Product = ({ part }) => {
  const { name, image, description, price } = part

  return (
    <div className='mt-20'>
      <div>
        <img src={image} alt='' />
      </div>
      <div>
        <h2 className='title'>{name}</h2>
        <p>{description}</p>
        <p>{price}</p>
      </div>
    </div>
  )
}

export default Product
