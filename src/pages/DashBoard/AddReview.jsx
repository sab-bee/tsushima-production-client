import React, { useState } from 'react'

const AddReview = () => {
  const [star, setStar] = useState(5)

  const handleRating = (e) => {
    e.preventDefault()
    console.log(star, e.target.review.value)
  }

  return (
    <div className='w-96 mx-auto mt-40 shadow-lg bg-white p-12 rounded-md'>
      <h2 className='mb-8'>Let us know about your experince</h2>
      <form onSubmit={handleRating}>
        <div className='grid justify-items-center'>
          <div className="rating">
            <input type="radio" name="rating-2" onChange={() => setStar(1)} className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" onChange={() => setStar(2)} className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" onChange={() => setStar(3)} className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" onChange={() => setStar(4)} className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" onChange={() => setStar(5)} className="mask mask-star-2 bg-orange-400" />
          </div>
          <div className='mt-4'>
            <label htmlFor="review">Write your opinion on us.</label>
            <textarea name="review" id="review" rows={3} className='input-box w-full'></textarea>
          </div>
        </div>
        <button className='cta cta-primary mt-6'>rate now</button>
      </form >
    </div >
  )
}

export default AddReview
