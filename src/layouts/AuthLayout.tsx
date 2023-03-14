import { Outlet } from 'react-router-dom'

const AuthLayout = (): JSX.Element => {
  return (
    <div className='flex justify-center mt-5'>
      <img src="" alt="" className='md:basis-1/2'/>
      <div className='w-full md:basis-1/2'>
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout
