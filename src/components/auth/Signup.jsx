import React from 'react'
import { Tv2 } from 'lucide-react'
import { Checkbox } from '../ui/checkbox'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import Navbar from '../Navbar'

const Signup = () => {
    return (
        <>
        <Navbar/>
        <div className='  bg-red-100 h-[90vh] flex items-center justify-center'>
            <div className='bg-white  mx-5 md:mx-0 h-[65vh] md:w-[30vw] rounded-xl shadow-md'>
                <div className='bg-violet-700 h-20 rounded-t-xl flex justify-center items-center gap-3 text-white '>
                    <Tv2 size={56} />
                    <h1 className='text-xl font-bold'>Patient system</h1>
                </div>
                <form action="">
                    <div className='flex flex-col justify-center gap-3 p-7'>
                        <h1 className='font-bold text-center my-4'>Signup to Your Account</h1>
                        <input
                            type='email'
                            className='h-12 border-2  border-gray-300 rounded-[7px] p-2'
                            placeholder='Enter your email.'
                        />
                        <input
                            type='password'
                            className='h-12 border-2  border-gray-300 rounded-[7px] p-2'
                            placeholder='Enter your password' />
                        <div className='flex gap-2 items-center'>
                            <Checkbox />
                            <h1>Remember me</h1>
                        </div>
                        <span>already have an account?
                            <Link to='/login'>
                                <Button type='submit' variant='link' className='text-blue-600'>login</Button>
                            </Link>
                        </span>

                    </div>
                    <div className='w-full text-center'> <Button className="w-1/3 bg-violet-700 text-white rounded-[7px]">Signup</Button></div>
                </form>
            </div>


        </div>
        </>
      
    )
}

export default Signup
