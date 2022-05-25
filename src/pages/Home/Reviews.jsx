import React from 'react';
import { useQuery } from 'react-query';
import { axiosPublic } from '../../api/axiosPublic';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Reviews = () => {
  const { data: reviews, isLoading } = useQuery('reviews', () => axiosPublic('/review').then((res) => res.data))

  if (isLoading) return
  return (
    <div className='py-12'>
      <h2 className=' title-center'>User Reviews</h2>
      <div className='part-cols'>
        {
          reviews?.map((review) => <Review key={review._id} review={review} />)
        }
      </div>
    </div>
  );
};

const Review = ({ review }) => {
  const { name, message, rating } = review

  return <div className='part'>
    <div className='part-body'>
      <h2 className='text-xl font-medium border-b-2 border-secondary'>{name}</h2>
      <div className='flex gap-x-2 text-2xl justify-center my-2 text-orange-300'>
        {
          [...Array(rating)].map((e, index) => <AiFillStar key={index} />)
        }
        {
          [...Array(5 - rating)].map((e, index) => <AiOutlineStar key={index} />)
        }
      </div>
      <p>{message}</p>
    </div>
  </div>
}

export default Reviews;