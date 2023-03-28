import { useState } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { api } from '../../services/axiosService'
import { setAuthToken } from '../../services/localStorageService'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
interface FormData {
  email: string
  password: string
}

const Login = (): JSX.Element => {
  const [error, setError] = useState('')
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
  const navigate = useNavigate()
  const { setCurrentUser } = useAuth()

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await api.post('auth/login', {
        username: data.email,
        password: data.password
      })
      setAuthToken(response.data.access_token)
      setCurrentUser(response.data)
      navigate('/dashboard')
    } catch (err: any) {
      setError(err.response?.data.message || 'Internal error')
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-5/6 mx-auto p-4 bg-white rounded-lg border border-gray-300 shadow-lg'
      >
        <p className='mb-2 own-titles-auth text-center'>Login</p>
        <p className='text-center mb-4 font-semibold'>Login and manage your notes</p>

        <div className='w-5/6 mx-auto'>

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
          className='own-input'
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

        <button className='w-full mt-6 border rounded-lg bg-primary p-2 text-white uppercase font-semibold hover:opacity-80'>
          Login
        </button>
        <p className='text-center own-input-error'>{error}</p>

        </div>
      </form>
    </>
  )
}

export default Login
