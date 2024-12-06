import React, {useEffect, useState} from 'react'
import axios from 'axios'
import StudentCard from '../../component/StudentCard/StudentCard'
import "./Home.css";
import icondataadd from '../../asset/dataadd.png'
import { Link } from 'react-router-dom';

function App() {
  const [students , setStudents] =useState([]);

  const loadStudent = async ()=>{
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/students`)  
    
  setStudents(response.data.data);
    
  }
useEffect (()=>{
  loadStudent();
},[])
//[] empty dependency jb jb page load honga  tb tb  loadStudent function  call honga 

  return (
    <div> 
      <h1>Student App</h1>

      {
        students.map((student , index)=>{
          const {rollNo,Name, city} = student;
          return (
            <StudentCard  key={index} rollNo={rollNo} Name={Name} city={city}/>
          )
        })
      }
      {
        students.length === 0 && <h3>Student not found</h3>    
      }
        
        <Link to='/Add'>
       <img src={icondataadd} className='icon'></img>
       </Link>
      </div>
  
  )
}

export default App

