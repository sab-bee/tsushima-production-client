import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import toast from 'react-hot-toast'
import { axiosPrivate } from '../../api/axiosPrivate'
import { auth } from '../../firebase/firebase.init'

const AddReview = () => {
  const [star, setStar] = useState(5)
  const [user] = useAuthState(auth)


  const handleRating = (e) => {
    e.preventDefault()
    const info = {
      name: user.displayName,
      rating: star,
      message: e.target.review.value
    }
    axiosPrivate.post('/review', info).then(() => {
      toast('thanks for review')
      e.target.reset()
    })

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
