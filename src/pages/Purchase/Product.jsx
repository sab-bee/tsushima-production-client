const Product = ({ part }) => {
  const { name, image, description } = part

  return (
    <div className=''>
      <div>
        <img src={image} alt='' />
      </div>
      <div>
        <h2 className='title'>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Product
