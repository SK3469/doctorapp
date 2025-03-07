import React, { useState } from 'react'
import { Label } from './ui/label'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import axios from 'axios'
import { setAuthUser } from '@/redux/authSlice'
import { toast } from 'sonner'


const PatientDetail = () => {
    const [loading, setLoading] = useState(false)
    const { user } = useSelector(store => store.auth)
    console.log(user)
    const [updatedUser, setUpdatedUser] = useState({
        firstname: user?.firstname || "",
        lastname: user?.lastname || "",
        phonenumber: user?.phonenumber || "",
        addressline1: user?.addressline1 || "",
        addressline2: user?.addressline2 || "",
        city: user?.city || "",
        state: user?.state || "",
        zipcode: user?.zipcode || ""
    });
    const dispatch = useDispatch()
   
    const updateFormHandler = (e) => {
        setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value })
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("firstname", updatedUser.firstname);
        formData.append("lastname", updatedUser.lastname);
        formData.append("phonenumber", updatedUser.phonenumber);
        formData.append("addressline1", updatedUser.addressline1);
        formData.append("addressline2", updatedUser.addressline2);
        formData.append("city", updatedUser.city);
        formData.append("state", updatedUser.state);
        formData.append("zipcode", updatedUser.zipcode);

        try {
            setLoading(true)
            const res = await axios.post(`${process.env.VITE_API_BASE_URL}/api/v1/user/profile/update`, formData, {
                headers: {
                    "Content-Type": 'multipart/form-data'
                },
                withCredentials: true
            });
            
            if (res.data.success) {
                dispatch(setAuthUser(res.data.user))
                toast.success(res.data.message)
            }
          
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }


    return (
        <form onSubmit={submitHandler}>
            <div className='p-10'>
                <div className='w-2/3 bg-white p-5 rounded-[9px] shadow-lg  '>
                    <h1 className='font-bold  border-b-2 pb-2'>Patient Details</h1>
                    <div className='grid md:grid-cols-3 gap-8 p-2 '>
                        <div className='col-span-1 p-1'>
                            <Label>First Name</Label>
                            <input
                                type="text"
                                name='firstname'
                                onChange={updateFormHandler}
                                value={updatedUser.firstname}
                                className='h-8 border-2  border-gray-300 rounded-[7px] p-2'
                            />
                        </div>
                        <div className='col-span-1 p-1'>
                            <Label>Last Name</Label>
                            <input
                                type="text"
                                name='lastname'
                                onChange={updateFormHandler}
                                value={updatedUser.lastname}
                                className='h-8 border-2  border-gray-300 rounded-[7px] p-2' />
                        </div>
                        <div className='col-span-1 p-1'>
                            <Label>Phonenumber</Label>
                            <input
                                type="number"
                                name='phonenumber'
                                onChange={updateFormHandler}
                                value={updatedUser.phonenumber}
                                className='h-8 border-2  border-gray-300 rounded-[7px] p-2' />
                        </div>
                        <div className='col-span-1 p-1'>
                            <Label>Email</Label>
                            <input
                                type="text"
                                value={user?.email}
                                className='h-8 border-2  border-gray-300 rounded-[7px] p-2' />
                        </div>
                        <div className='col-span-1 p-1'>
                            <Label>Address Line 1</Label>
                            <input
                                type="text"
                                name='addressline1'
                                onChange={updateFormHandler}
                                value={updatedUser.addressline1}
                                className='h-8 border-2  border-gray-300 rounded-[7px] p-2' />
                        </div>
                        <div className='col-span-1 p-1'>
                            <Label>Address Line 2</Label>
                            <input
                                type="text"
                                name='addressline2'
                                onChange={updateFormHandler}
                                value={updatedUser.addressline2}
                                className='h-8 border-2  border-gray-300 rounded-[7px] p-2' />
                        </div>
                        <div className='col-span-1 p-1'>
                            <Label>City</Label>
                            <input
                                type="text"
                                name='city'
                                onChange={updateFormHandler}
                                value={updatedUser.city}
                                className='h-8 border-2  border-gray-300 rounded-[7px] p-2' />
                        </div>
                        <div className='col-span-1 p-1'>
                            <Label>State</Label>
                            <input
                                type="text"
                                name='state'
                                onChange={updateFormHandler}
                                value={updatedUser.state}
                                className='h-8 border-2  border-gray-300 rounded-[7px] p-2' />
                        </div>
                        <div className='col-span-1 p-1'>
                            <Label>Zipcode</Label>
                            <input
                                type="number"
                                name='zipcode'
                                onChange={updateFormHandler}
                                value={updatedUser.zipcode}
                                className='h-8 border-2  border-gray-300 rounded-[7px] p-2' />
                        </div>

                    </div>
                    {
                        loading ? (<Button className="px-4 bg-violet-700 text-white rounded-[7px]">
                            <Loader2 className='w-4 h-4 animate-spin' /> Please wait.</Button>) :
                            (
                                <Button type='submit' className="px-4 bg-violet-700 text-white rounded-[7px]">ADD</Button>
                            )
                    }

                </div>
            </div>
        </form>
    )
}

export default PatientDetail