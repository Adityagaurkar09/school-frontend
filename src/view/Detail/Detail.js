import React, { useEffect, useState } from 'react'
import "./Detail.css"
import { useParams } from 'react-router-dom'
import axios from 'axios';
//path parameter pass kiya gaya hai us ke lie usePrams ka use kiya hai

function Detail() {

  const [Student , setStudent] = useState();

  const {rollNo} = useParams();
  
  const loadStudentDetail = async(rollNo)=>{
    const response = await axios.get(`http://localhost:5002/students/${rollNo}`)
    setStudent(response.data.data)

  }
  useEffect(()=>{
    loadStudentDetail(rollNo)
  },[rollNo])
  return (
    <div>
        <h1>Student Detail</h1>
       <div>
        <h2>name = {Student?.Name}</h2>
        <h2>rollNo = {Student?.rollNo}</h2>
        <h2>city = {Student?.city}</h2>
       </div>
    </div>
  )
}

export default Detail