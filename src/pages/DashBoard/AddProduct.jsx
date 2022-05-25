import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { axiosPrivate } from '../../api/axiosPrivate';

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onChange',
  })

  const imageApiKey = '2abc723795f5afbbffa21a87ab1de23e'

  const handleAddProduct = (data) => {
    const { image, minimumQuantity, availableQuantity, price, ...rest } = data

    const thumbnail = image[0]
    const formData = new FormData()
    formData.append('image', thumbnail)

    const productData = { ...rest, minimumQuantity: Number(minimumQuantity), availableQuantity: Number(availableQuantity), price: Number(price) }
    //! console.log(productData);
    axiosPrivate.post('/part', productData).then((res) => {
      const insertedId = res.data?.insertedId
      toast.success('product added', {
        position: 'bottom-center'
      })
      reset()
      axios.post(`https://api.imgbb.com/1/upload?key=${imageApiKey}`, formData).then((res) => {
        if (res.status === 200) {
          const image = res.data?.data?.url
          axiosPrivate.put(`/part?id=${insertedId}`, { image }).then().catch((err) => toast.error('could not upload image'))
        }
      })
    })

  }
  return (
    <div className='form-container'>
      <h2 className='form-title text-secondary'>Add Product</h2>
      <form onSubmit={handleSubmit(handleAddProduct)}>
        {
          //* prodyct name
        }
        <div className='input-wraper'>

          <label htmlFor='name'>Product Name</label>
          <input
            className={`${errors.name && 'input-box-error'} input-box`}
            name='name'
            type='text'
            {...register('name', { required: 'require information' })}
          />
          <p className='error-text'>{errors.name?.message}</p>
        </div>
        {
          //* prodyct name
        }
        <div className='input-wraper'>

          <label htmlFor='description'>Product Description</label>
          <textarea
            className={`${errors.description && 'input-box-error'} input-box`}
            name='description'
            type='text'
            {...register('description', { required: 'require information' })}
          />
          <p className='error-text'>{errors.description?.message}</p>
        </div>
        {
          //* minimum quantity
        }
        <div className='input-wraper'>

          <label htmlFor='minimumQuantity'>Minimum order quantity</label>
          <input
            className={`${errors.minimumQuantity && 'input-box-error'} input-box`}
            name='minimumQuantity'
            type='number'
            {...register('minimumQuantity', { required: 'require information' })}
          />
          <p className='error-text'>{errors.minimumQuantity?.message}</p>
        </div>
        {
          //* maximum quantity
        }
        <div className='input-wraper'>

          <label htmlFor='availableQuantity'>Available order quantity</label>
          <input
            className={`${errors.availableQuantity && 'input-box-error'} input-box`}
            name='availableQuantity'
            type='number'
            {...register('availableQuantity', { required: 'require information' })}
          />
          <p className='error-text'>{errors.availableQuantity?.message}</p>
        </div>
        {
          //* product price
        }
        <div className='input-wraper'>

          <label htmlFor='price'>Retail Price</label>
          <input
            className={`${errors.price && 'input-box-error'} input-box`}
            name='price'
            type='number'
            {...register('price', { required: 'require information' })}
          />
          <p className='error-text'>{errors.price?.message}</p>
        </div>
        {
          //* product image
        }
        <div className='input-wraper'>

          <label htmlFor='image'>Product image</label>
          <input
            className={`${errors.image && 'input-box-error'} input-box`}
            name='image'
            type='file'
            {...register('image', { required: 'require file' })}
          />
          <p className='error-text'>{errors.price?.image}</p>
        </div>
        <button type="submit" className='cta cta-primary'>add product</button>
      </form>

    </div>
  );
};

export default AddProduct;