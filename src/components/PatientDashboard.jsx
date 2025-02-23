import React from 'react'
import Navbar from './Navbar'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Timer, User } from 'lucide-react'
import PatientDetail from './PatientDetail'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '@/redux/store'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { setAuthUser } from '@/redux/authSlice'

const PatientDashboard = () => {

    const {user} = useSelector (store=>store.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${process.env.VITE_API_BASE_URL}/api/v1/user/logout`, {
                withCredentials: true // Ensure cookies are handled correctly
            });
    
            console.log("Logout Response:", res.data); // Debugging
    
            if (res.data.success) { // Fix this line (previously res.success)
                dispatch(setAuthUser(null));
                navigate('/');
            }
        } catch (error) {
            console.error("Logout Error:", error);
        }
    };
    

    return (
        <>
            <Navbar />
            <div className='w-full h-[90vh] flex'>
                <div className='flex w-[15%] justify-center shadow-md shadow-gray-400  z-30  '>
                    <div className='flex flex-col justify-start items-center mt-9 gap-3'>
                       <img height={60}width={70} src='https://cdn-icons-png.flaticon.com/512/3359/3359081.png'/>
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='font-bold text-lg'>{user?.name}</h1>
                            <p className='text-sm text-gray-600'>{user?.role}</p>
                        </div>
                        <div className='flex gap-2 flex-col text-gray-600 my-5 space-y-2'>
                            <button className="hover:text-white hover:rounded-r-full hover:shadow-lg hover:bg-gradient-to-r from-blue-400 to-violet-950  flex gap-3 p-2 px-12 hover:px-12 hover:p-2 "><Timer /> Patient</button>
                            <button onClick={logoutHandler} className=" hover:text-white hover:rounded-r-full hover:shadow-lg hover:bg-gradient-to-r from-blue-400 to-violet-950  flex gap-3 p-2 px-12 hover:px-12 hover:p-2 "><User /> Logout</button>
                        </div>

                    </div>
                </div>
                <div className='flex-1 bg-gray-100 '>
                    <div className='h-20 shadow-md shadow-gray-300 bg-white -z-20'>
                        <h1 className='font-bold text-xl p-6'> Patient Dashboard</h1>
                    </div>
                   <PatientDetail/>
                </div>
            </div>
        </>
    )
}

export default PatientDashboard