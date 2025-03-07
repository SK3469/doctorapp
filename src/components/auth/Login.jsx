import React, { useState } from 'react'
import { Loader2, Tv2 } from 'lucide-react'
import { Checkbox } from '../ui/checkbox'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '@/redux/store'
import axios from 'axios'
import { setAuthUser } from '@/redux/authSlice'
import { toast } from 'sonner'

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector(store => store.auth)
    console.log(user)


    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const loginHandler = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/v1/user/login`, input, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
            // console.log("API Base URL:", import.meta.env.VITE_API_BASE_URL);

            if (res.data.success) {
                dispatch(setAuthUser(res.data.user));
                navigate("/patient-dashboard");
                setInput({
                    email: "",
                    password: ""
                })
            }
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.message)
        } finally {
            setLoading(false)
        }
    }


    return (
        <div className='  bg-red-100 h-[90vh] flex items-center justify-center'>
            <div className='bg-white  mx-5  md:mx-0  rounded-xl shadow-md'>
                <div className='bg-violet-700 h-20 rounded-t-xl flex justify-center items-center gap-3 text-white '>
                    <Tv2 size={56} />
                    <h1 className='text-xl font-bold'>Patient system</h1>
                </div>
                <form onSubmit={loginHandler}>
                    <div className='flex flex-col justify-center gap-3 p-9  '>
                        <h1 className='font-bold text-center my-4'>Login to Your Account</h1>
                        <input
                            type='email'
                            value={input.email}
                            name='email'
                            onChange={changeEventHandler}
                            className='h-12 border-2  border-gray-300 rounded-[7px] p-2'
                            placeholder='Enter your email.'
                        />
                        <input
                            type='password'
                            name='password'
                            value={input.password}
                            onChange={changeEventHandler}
                            className='h-12 border-2  border-gray-300 rounded-[7px] p-2'
                            placeholder='Enter your password' />
                        <div className='flex gap-2 items-center'>
                            <Checkbox />
                            <h1>Remember me</h1>
                        </div>
                        <span>not have any account?
                            <Link to='/signup'>
                                <Button variant='link' className='text-blue-600'>signup</Button>
                            </Link>
                        </span>

                    </div>
                    <div className='w-full text-center p-5 '>
                        {
                            loading ? (<button className=" px-4 bg-violet-700 text-white rounded-[7px] flex items-center gap-2 mx-16 p-1">
                                <Loader2 className='w-4 h-4 animate-spin' /> Please wait.</button>) :
                                (
                                    <button type='submit' className="w-1/3 bg-violet-700 text-white p-1 rounded-[7px]">Login</button>
                                )
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
