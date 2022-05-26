const Product = ({ part }) => {
  const { name, image, description, price, availableQuantity } = part

  return (
    <div className='mt-20'>
      <div>
        <img src={image} alt='' />
      </div>
      <div className="space-y-4">
        <h2 className='title '>{name}</h2>
        <p>{description}</p>
        <p className="text-3xl font-bold ">${price}</p>
        <p className="font-medium text-xl">available - {availableQuantity} pieces</p>
      </div>
    </div>
  )
}

export default Product
