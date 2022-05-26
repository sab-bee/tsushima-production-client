import React from 'react';
import { useQuery } from 'react-query';
import { axiosPublic } from '../../api/axiosPublic';
import { AiFillStar, AiOutlineStar, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Reviews = () => {
  const { data: reviews, isLoading } = useQuery('reviews', () => axiosPublic('/review').then((res) => res.data))

  if (isLoading) return
  return (
    <div className='py-12'>
      <h2 className='title-center'>User Reviews</h2>
      <div className='box cursor-pointer'>
        <Swiper
          spaceBetween={100}
          slidesPerView={1}
          breakpoints={{
            '@0.75': {
              slidesPerView: 1.4,
            },
            '@1.00': {
              slidesPerView: 2.4,
            },
            '@1.50': {
              slidesPerView: 3.5,
            },
          }}
        >
          {
            reviews?.map((review) => {
              return <SwiperSlide key={review._id}>
                <Review review={review} />
              </SwiperSlide>
            })
          }
        </Swiper>
      </div>
      <div className='flex items-center text-xl w-fit mx-auto mt-8 text-gray-400'>
        <AiOutlineLeft />
        <span>swipe</span>
        <AiOutlineRight />
      </div>
    </div>
  );
};

const Review = ({ review }) => {
  const { name, message, rating } = review

  return <div>
    <div className=''>
      <h2 className='text-xl font-medium border-b-2 border-purple-300'>{name}</h2>
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