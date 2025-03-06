import React from 'react'
import Navbar from './Navbar'
import { Select, SelectContent, SelectItem, SelectLabel, SelectTrigger, SelectValue, SelectGroup } from './ui/select'

const doctors = [{
  name: "Dr. John",
  department: "Cardiology",
  date: "11 sept,2024",
  patient: "ALINA JOE",
  rating: 4.8
}, {
  name: "Dr. Jane",
  department: "Dentistry",
  date: "11 sept,2024",
  patient: "ALINA JOE",
  rating: 4.8
}
, {
  name: "Dr. Jane",
  department: "Dentistry",
  date: "11 sept,2024",
  patient: "ALINA JOE",
  rating: 4.8
}
, {
  name: "Dr. Jane",
  department: "Dentistry",
  date: "11 sept,2024",
  patient: "ALINA JOE",
  rating: 4.8
}]
const MyAppointment = () => {
  return (
    <>
      <Navbar  />
      <div className='bg-gray-100 max-w-6xl mx-auto  '>
        <div className='flex  items-center justify-center'>
          <Select className=" ">
            <SelectTrigger className="w-[80px] border-none  bg-gray-300 rounded-md mt-4 shadow-md">
              <SelectValue placeholder="2024" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className='grid md:grid-cols-2 mx-auto mt-5 p-4 gap-4 absolute -z-10'>
          {
            doctors.map((doctor) => (
              <div key={doctor.name} className="max-w-3xl cols-span-1 border rounded-md shadow-md mx-auto md:ml-8">
                <div className=' flex relative'>
                  <img src='https://c1.wallpaperflare.com/preview/316/518/391/medicine-stethoscope-doctor-dr.jpg' width={500} className='h-[250px] object-cover ' />
                  <h1 className='absolute top-0 right-0 text-blue-600 z-10 p-2 '>{doctor.date}</h1>
                </div>
                <div className="flex justify-between items-center p-4 bg-blue-600 text-white">
                  <div>
                    <h1>Doctor Details</h1>
                    <h1>Name: {doctor.name}</h1>
                    <h1>Department: {doctor.department}</h1>
                    <h1>Rating: {doctor.rating}</h1>
                    <h1 className="mt-4 text-lg font-bold">PATIENT NAME: {doctor.patient}</h1>
                  </div>
                  <button className="font-extrabold text-xl bg-white text-blue-600 px-4 rounded-xl shadow-md">
                    JOIN
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>

  )
}

export default MyAppointment