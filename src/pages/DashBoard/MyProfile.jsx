import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { auth } from '../../firebase/firebase.init';
import { axiosPrivate } from '../../api/axiosPrivate'
import toast from 'react-hot-toast';

const MyProfile = () => {
  const [user] = useAuthState(auth)


  const { data, isLoading, refetch } = useQuery(['userProfile', user.email], () => axiosPrivate(`/userProfile/${user.email}`).then((res) => res.data))

  if (isLoading) return


  return (
    <Profile user={user} data={data} refetch={refetch}>
    </Profile>
  );
};

function Profile({ data, user, refetch }) {
  const [edit, setEdit] = useState(false)
  const { name, email, linkedin, education, location } = data
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onChange', defaultValues: {
      linkedin: linkedin,
      education: education,
      location: location,
    }
  })


  const handleUpdateProfile = (data) => {
    axiosPrivate.put(`/userProfile?email=${user.email}`, data).then((res) => {
      if (res?.data?.acknowledged) {
        toast.success('profile updated')
        refetch()
      }
    })
    setEdit(false)
  }

  return <div className='form-container'>
    <img src={user.photoURL} alt="" />
    <h2 className='form-title text-secondary'>User Information</h2>
    <form onSubmit={handleSubmit(handleUpdateProfile)}>
      {
        //?............name
      }
      <div className='input-wraper'>
        <label htmlFor='name' className='input-label'>
          Name
        </label>
        <input
          id='name'
          className={`input-box`}
          placeholder='enter name'
          type='text'
          value={name}
          name='name'
          disabled
        ></input>
      </div>
      {
        //?............email
      }
      <div className='input-wraper'>
        <label htmlFor='email' className='input-label'>
          Email
        </label>
        <input
          id='email'
          className={`input-box`}
          placeholder='enter email'
          type='text'
          value={email}
          name='email'
          disabled
        ></input>
      </div>


      {
        //?............linkedin
      }
      <div className='input-wraper'>
        <label htmlFor='linkedin' className='input-label'>
          LinkedIn Address
        </label>
        <input
          id='linkedin'
          className={`${errors.email && 'input-box-error'} input-box`}
          placeholder='enter linkedin profile'
          type='text'
          name='linkedin'
          disabled={!edit}
          {...register('linkedin')}
        ></input>
        <p className='error-text'>{errors.linkedin?.message}</p>
      </div>

      {
        //?............educattion
      }
      <div className='input-wraper'>
        <label htmlFor='education' className='input-label'>
          Where did you study?
        </label>
        <input
          id='education'
          className={`${errors.email && 'input-box-error'} input-box`}
          placeholder='enter institute '
          type='text'
          name='education'
          disabled={!edit}
          {...register('education')}
        ></input>
        <p className='error-text'>{errors.education?.message}</p>
      </div>
      {
        //?............location
      }
      <div className='input-wraper'>
        <label htmlFor='location' className='input-label'>
          Where do you live?
        </label>
        <input
          id='location'
          className={`${errors.email && 'input-box-error'} input-box`}
          placeholder='enter city/district'
          type='text'
          name='location'
          disabled={!edit}
          {...register('location')}
        ></input>
        <p className='error-text'>{errors.location?.message}</p>
      </div>
      {
        edit && <div className='space-y-2'>
          <button type='submit' className='cta cta-primary'>update</button>
          <button type='button' className='cta cta-danger' onClick={() => {
            setEdit(false)
            reset()
          }}>cancel</button></div>
      }
    </form>
    {
      !edit &&
      <button className='cta cta-glass underline text-primary' onClick={() => setEdit(true)}>edit</button>
    }
  </div>
}
export default MyProfile;