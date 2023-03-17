import { Outlet, Link, useLocation } from 'react-router-dom'

const AuthLayout = (): JSX.Element => {
  const { pathname } = useLocation()

  return (
    <div className='flex justify-center mt-5'>
      <img src="" alt="" className='md:basis-1/2'/>
      <div className='w-full md:basis-1/2'>
        <Outlet />

        <div className='mt-5 flex flex-col justify-center items-center'>
          {
            pathname !== '/register'
              ? <Link
                className='text-primary'
                to={'register'}
              > Do you have not an account? - Sigin up</Link>
              : null
          }
          {
            pathname !== '/reset-password'
              ? <Link
                className='text-primary'
                to={'reset-password'}
              > Forgot my password</Link>
              : null
          }
          {
            pathname !== '/'
              ? <Link
                className='text-primary'
                to={'/'}
              > Sing in</Link>
              : null
          }
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
