import React, { useRef, useState } from 'react'
import Navbar from './Navbar'
import { Label } from './ui/label'
import { Calendar } from './ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { CalendarIcon, Upload } from 'lucide-react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { format } from "date-fns"
import { Input } from './ui/input'
import { Select, SelectContent, SelectItem, SelectLabel, SelectTrigger, SelectValue, SelectGroup } from './ui/select'
import { Textarea } from './ui/textarea'

const BookAnAppointment = () => {
  const [date, setDate] = useState(new Date())
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Triggers file selection dialog
    }
  };
  return (<>
    <Navbar />
    <div className='w-full h-screen bg-gray-100 mx-auto flex justify-center  '>
      <form action="">
      <div className='bg-white p-4 rounded-[7px] shadow-lg max-w-xl flex flex-col gap-2 my-12'>
        <h1 className='font-bold text-2xl'>Book an Appointment</h1>
        <div className='grid grid-cols-2 gap-12 my-2 '>
          <div>
            <Label>Select Data</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[280px] justify-start text-left font-normal border border-gray-300 rounded-[4px]",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <Label>Select Time</Label>
            <Input
              className="border border-gray-300 rounded-[4px]"
            />
          </div>
        </div>
        <div className='my-2'>
          <Label>Department</Label>
          <Select className=" ">
            <SelectTrigger className="w-full border border-gray-300 rounded-[4px]">
              <SelectValue placeholder="dermatologist" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectGroup>
                <SelectLabel value="dermatologist">Dermatologist</SelectLabel>
                <SelectItem value="cardiologist">Cardiologist</SelectItem>
                <SelectItem value="neurologist">Neurologist</SelectItem>
                <SelectItem value="pediatrician">Pediatrician</SelectItem>
                <SelectItem value="orthopedist">Orthopedist</SelectItem>
                <SelectItem value="gynecologist">Gynecologist</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Comments</Label>
          <Textarea
          type="text"

          className="text-gray-700  border border-gray-300 rounded-[4px]"
            placeholder="Discribe your problems." />  
        </div>
        <div className="flex items-center my-3">
      <Label>Upload Reports</Label>
      <div>
        {/* Button with Upload Icon */}
        <Button variant="outline" onClick={handleUploadClick} className="flex items-center gap-1 border-none">
          <Upload className="w-5 h-5 " />
         
        </Button>

        {/* Hidden File Input */}
        <Input type="file" className="hidden" ref={fileInputRef} />
      </div>
    </div>
    <div className='text-center'>
    <button type='submit ' className='bg-violet-800 rounded-[6px] text-white p-1 px-3 '>Submit</button>
    </div>
    
      </div>
      
      </form>
      
    </div>
  </>

  )
}

export default BookAnAppointment