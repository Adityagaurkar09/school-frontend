import React, { useState,useEffect } from 'react'
import "./Update.css"
import iconHome from '../../asset/home.png'
import { Link,useParams  } from 'react-router-dom'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'


function Add() {
 
  // const [rollNo , setrollNo] = useState('');
  // const [Name , setName] = useState('');
  // const [city , setCity] = useState('');

  const [student , setStudent] = useState({
    rollNo:"",
    Name:"",
    city:""
  });

  const {rollNo} = useParams();

  const loadStudentDetail = async(rollNo)=>{
    const response = await axios.get(`http://localhost:5003/students/${rollNo}`)
    setStudent(response.data.data)
  };

  useEffect(()=>{
    loadStudentDetail(rollNo)
  },[rollNo])

  const updateStudent = async()=>{
    try
    {
    const response = await axios.put(`http://localhost:5003/students/${rollNo}`,{
      Name: student.Name,
      city:student.city
      
    });

    toast.success(response?.data?.message);
  }catch (error){
    toast.error(error?.data?.message);
   
  }
  };
 
  return (
    <div className='student-form'>
        <h1>update Student</h1>

        <input type='text' 
        placeholder='RollNo' 
        className='user-input' 
        value={student.rollNo} 
        onChange={(e)=>
          setStudent({
          ...student,
          rollNo:e.target.value
        })}
        disabled/>
        

        <input type='text' 
        placeholder='Name'
        className='user-input'
        value={student.Name} 
        onChange={(e)=>
          setStudent({
            ...student,
            Name:e.target.value
          })}/>
        

        <input type='text' 
        placeholder='city'
        className='user-input'
        value={student.city} 
        onChange={(e)=>
          setStudent({
            ...student,
            city:e.target.value
          })}/>
        
        
        <button type='button'
         className='btn'
         onClick={()=>{
          updateStudent();
         }}
        >Update student</button>
       
       <Link to='/'>
        <img src={iconHome} className='icon'/>
        </Link>

        <Toaster/>
    </div>

   
  )
}

export default Add