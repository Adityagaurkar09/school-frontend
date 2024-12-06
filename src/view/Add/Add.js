import React, { useState } from 'react'
import "./Add.css"
import iconHome from '../../asset/home.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'


function Add() {
 
  const [rollNo , setrollNo] = useState('');
  const [Name , setName] = useState('');
  const [city , setCity] = useState('');

  const addStudent = async()=>{
    try
    {
    const response = await axios.post("https://school-7fpy.onrender.com/students",{
      rollNo : rollNo,
      Name: Name,
      city:city
      
    })

    setrollNo("");
    setName("");
    setCity("");

    toast.success(response?.data?.message);
  }catch (error){
    toast.error(error?.data?.message);
   
  }
  };
 
  return (
    <div className='student-form'>
        <h1>Add Student</h1>

        <input type='text' 
        placeholder='RollNo' 
        className='user-input' 
        value={rollNo} 
        onChange={(e)=>setrollNo(e.target.value)}/>
        

        <input type='text' 
        placeholder='Name'
        className='user-input'
        value={Name} 
        onChange={(e)=>setName(e.target.value)}/>
        

        <input type='text' 
        placeholder='city'
        className='user-input'
        value={city} 
        onChange={(e)=>setCity(e.target.value)}/>
        
        
        <button type='button'
         className='btn'
         onClick={()=>{
          addStudent();
         }}
        >add student</button>
       
       <Link to='/'>
        <img src={iconHome} className='icon'/>
        </Link>

        <Toaster/>
    </div>

   
  )
}

export default Add