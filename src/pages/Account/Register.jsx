import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({ mode: 'onChange' })

  const navigate = useNavigate()
  const location = useLocation()

  const [isPassMatch, setIsPassMatch] = useState(true)

  useEffect(() => {
    const subscription = watch((data) => {
      if (data.password !== data.confirmPassword && data.confirmPassword) {
        setIsPassMatch(false)
      } else {
        setIsPassMatch(true)
      }
    })
    return () => {
      subscription.unsubscribe()
    }
  }, [watch])

  const onSubmit = (data) => {
    // createUser.handleCreateUser(data)
    data = capitalizeName(data)
    console.log(data)
    reset()
  }

  // capitalize name if user gives in small letter
  const capitalizeName = ({ name, ...rest }) => {
    const eachName = name.split(' ')
    const fullName = eachName.map((n) => {
      const singleName = n[0].toUpperCase() + n.substr(1)
      return singleName
    })
    return { ...rest, name: fullName.join(' ') }
  }

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className='form-title'>Register.</h2>
        {
          // .............name
        }
        <div className='input-wraper'>
          <label htmlFor='name' className='input-label'>
            Full Name
          </label>
          <input
            id='name'
            className={`${errors.name && 'input-box-error'} input-box`}
            placeholder='enter full name'
            type='name'
            name='name'
            {...register('name', {
              required: 'plese enter your name',
              pattern: {
                value: /^[A-Za-z' ']+$/i,
                message: 'name contains letter only',
              },
            })}
          ></input>
          <p className='error-text'>{errors.name?.message}</p>
        </div>
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
              minLength: {
                value: 8,
                message: 'too short : minimum 8 characters',
              },
            })}
          ></input>
          <p className='error-text'>{errors.password?.message}</p>
        </div>
        {
          //-----------confirm password
        }
        <div className='input-wraper'>
          <label htmlFor='confirmPassword' className='input-label'>
            Confirm Password
          </label>
          <input
            id='confirmPassword'
            className={`${
              (errors.confirmPassword || !isPassMatch) && 'input-box-error'
            } input-box`}
            placeholder='enter password'
            type='password'
            name='confirmPassword'
            {...register('confirmPassword', {
              required: 'confirm password is required',
            })}
          ></input>
          <p className='error-text'>{errors.confirmPassword?.message}</p>
          {!isPassMatch && !errors.confirmPassword && (
            <p className='error-text'>password does not match</p>
          )}
        </div>
        <div className='input-wraper mt-10'>
          <button className='cta cta-primary'>register</button>
        </div>
        <div>
          already have account?{' '}
          <span
            onClick={() =>
              navigate('/account', { state: location.state, replace: true })
            }
            className='navigator'
          >
            Login
          </span>
        </div>
      </form>
    </div>
  )
}

export default Register
