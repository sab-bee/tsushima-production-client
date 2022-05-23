import React from 'react'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import google from '../../assets/icon/google.svg'
import { useFirebase } from '../../hooks/useFirebase'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: 'onChange' })

  const navigate = useNavigate()
  const location = useLocation()

  const { googleSignIn, userLogin } = useFirebase()

  const onSubmit = (data) => {
    userLogin.handleUserLogin(data)
    reset()
  }

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className='form-title'>Log In.</h2>

        {
          // .............email
        }
        <div className='input-wraper'>
          <label htmlFor='email' className='input-label'>
            Email Address
          </label>
          <input
            id='email'
            className={`${errors.email && 'input-box-error'} input-box`}
            placeholder='enter email address'
            type='email'
            name='email'
            {...register('email', {
              required: 'you need to specify email',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'invalid email',
              },
            })}
          ></input>
          <p className='error-text'>{errors.email?.message}</p>
        </div>
        {
          //-----------password
        }
        <div className='input-wraper'>
          <label htmlFor='password' className='input-label'>
            Password
          </label>
          <input
            id='password'
            className={`${errors.password && 'input-box-error'} input-box`}
            placeholder='enter password'
            type='password'
            name='password'
            {...register('password', {
              required: 'you must secify password',
            })}
          ></input>
          <p className='error-text'>{errors.password?.message}</p>
        </div>

        <div className='input-wraper mt-12'>
          <button className='cta cta-primary'>login</button>
        </div>
        <div className='flex gap-x-2 justify-center mt-12'>
          <p>
            Don't have account?
          </p>
          <span
            onClick={() =>
              navigate('/account/register', {
                state: location.state,
                replace: true,
              })
            }
            className='navigator'
          >
            Register
          </span>
        </div>
        <div className='divider font-medium text-gray-400'>Or continue with</div>
        <button
          type='button'
          onClick={() => googleSignIn.handleGoogleSignIn()}
          className='cta cta-glass mt-12 flex items-center justify-center gap-x-2'
        >
          <img className='w-6' src={google} alt='google' />
          <span>SignIn With Google</span>
        </button>
      </form>
    </div>
  )
}

export default Login
