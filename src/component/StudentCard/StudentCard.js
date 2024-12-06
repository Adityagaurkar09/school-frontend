import React from 'react'
import "./StudentCard.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


function StudentCard({ rollNo,Name,city}) {
  const navigate = useNavigate();

  const deletStudent = async(rollNo)=>{
    const response = await axios.delete(`http://localhost:5002/students/${rollNo}`)
     window.location.reload();
  }
  return (
 
    <div className='card'
     onClick={(e) => {
          
          navigate(`/Detail/${rollNo}`);
          
         }}>
        <h3 className='name'>{Name}</h3>
        <div className='detail'>
            <span> no: {rollNo}</span>
            <span>city: {city}</span>
        </div>

        <span>
        <button type='button'
         className=' Delet-btn'
         onClick={(e) => {
          e.stopPropagation();
          deletStudent(rollNo);
          
         }}
        >Delet</button>
        </span>

        <span>
        <button type='button'
         className=' edit-btn'
         onClick={(e) => {
          e.stopPropagation();
          navigate(`/edit/${rollNo}`)
          
         }}
        >Edit</button>
        </span>
    </div>
  )
}

export default StudentCard