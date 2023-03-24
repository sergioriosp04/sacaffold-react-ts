import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { api } from '../../services/axiosService'

interface FormData {
  firstName: string
  lastName: string
  document: string
  email: string
  password: string
  confirmPassword: string
}

const Register = (): JSX.Element => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>()
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const password = watch('password')
  const confirmPassword = watch('confirmPassword')

  const validateConfirmPassword = (): boolean => {
    return password === confirmPassword
  }

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await api.post('/users', data)
      navigate('/')
    } catch (err: any) {
      setError(
        err.response?.data.message || err.response?.data.message || err.message || 'Internal error')
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-5/6 mx-auto p-4 bg-white rounded-lg border border-gray-300 shadow-lg'
    >
      <p className='mb-2 own-titles-auth text-center'>Sing up</p>
      <p className='text-center mb-4 font-semibold'>Sing up and explore our world</p>

      <div className='w-5/6 mx-auto'>

        <label className='font-light m-1' htmlFor="firstName">Firstname</label>
        <input
          className='own-input mb-4'
          type="firstName"
          id="firstName"
          placeholder='Juan'
          {...register('firstName', { required: 'Firstname is required' })}
        />
        <p>{errors.firstName?.message}</p>

        <label className='font-light m-1' htmlFor="lastName">Lastname</label>
        <input
          className='own-input mb-4'
          type="lastName"
          id="lastName"
          placeholder='Perez'
          {...register('lastName', { required: 'Lastname is required' })}
        />
        <p>{errors.lastName?.message}</p>

        <label className='font-light m-1' htmlFor="email">Email</label>
        <input
          className='own-input mb-4'
          type="email"
          id="email"
          placeholder='Email@email.com'
          {...register('email', { required: 'Email is required' })}
        />
        <p>{errors.email?.message}</p>

        <label className='font-light m-1' htmlFor="password">Password</label>
        <input
          className='own-input mb-4'
          type="password"
          id="password"
          placeholder='Your password'
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 5,
              message: 'Passoword cannot less than 5 characters'
            },
            maxLength: {
              value: 25,
              message: 'Passoword cannot more than 25 characters'
            }
          })}
        />
        <p className=' own-input-error'>{errors.password?.message}</p>

        <label className='font-light m-1' htmlFor="repeatPassword">Confirm password</label>
        <input
          className='own-input'
          type="password"
          id="repetPassword"
          placeholder='Confirm password'
          {...register('confirmPassword', {
            validate: validateConfirmPassword
          })}
        />
        <p className=' own-input-error'>{(errors.confirmPassword != null) ? 'The password are not the same' : null }</p>

        <button className='w-full mt-6 border rounded-lg bg-primary p-2 text-white uppercase font-semibold hover:opacity-80'>
          Sing up
        </button>
        {error !== '' && <p className='text-center own-input-error'>{ error }</p>}
    </div>
    </form>
  )
}

export default Register
