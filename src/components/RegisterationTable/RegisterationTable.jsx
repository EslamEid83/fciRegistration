
import React, { useState, useEffect } from 'react';
import "./RegisterationTable.scss";
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { $authAtom } from '../../store';
import { toast } from 'react-toastify';
export default function RegisterationTable(){
  const [courses, setCourses] = useState([]);
  const [std, setStd] = useState();
  const [ authData , setAuthData,userData ] = useRecoilState($authAtom);

  useEffect(() => {
    fetch(`http://localhost:3004/users/1`)
      .then(response => response.json())
      .then(data => setStd(data))
    //   .catch(error => console.error('std', error));
  }, []);
//   console.log(std);
//   console.log(authData.user);
  useEffect(() => {
    fetch(`http://localhost:3004/Courses?courseLevel=${authData.user.levelId}&courseDepartment=${authData.user.department}`)
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error('http://localhost:3004/Courses', error));
  }, []);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
async function addCourse(courseInfo ,index){
    try{
        const res= await axios.post("http://localhost:3004/coursesTest",courseInfo,{
        headers:{
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
      }
    );
    // console.log(res);
    
    }
    catch(error){
        // console.log(error);
    }
    document.getElementById(index).disabled = true;
    toast.success(` ${courseInfo.courseName} is added successfully`)
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  async function deleteCourse(id ,indexx){
    const res= await axios.delete(`http://localhost:3004/coursesTest/${id}`);
    document.getElementById(indexx).disabled = false;
    toast.success(` Deleted successfully`);
}

  return (
    <div className="col-12" id='regTable'>
        <h1>Registration Table</h1>
    <table id='tableOfCourses'>
        <thead>
            <tr>
                <th colSpan={5} className="level"><h3>Level {authData.user.levelId}</h3></th>
            </tr>
            <tr>
                <th className="courseNumber">Id</th>
                <th>Course Name</th>
                <th className="courseNumber">Hours</th>
                <th className="courseNumber">Add</th>
                <th className="courseNumber">Delete</th>
            </tr>
        </thead>
        <tbody>
            {
                courses.map((course , i) =>{
                    return(
                        <tr key={i}>
                        <td className="courseNumber">{course.id}</td>
                        <td>{course.courseName} </td>
                        <td className="courseNumber">{course.courseHours}</td>
                        <td className="courseNumber">
                        <button className='btn btn-success' id={i} onClick={() => { addCourse(course, i) }}>Add</button>
                        </td>
                        <td className="courseNumber">
                        <button className='btn btn-danger' id={i} onClick={() => deleteCourse(course.id,i)}>Delete</button>
                        </td>
                    </tr>
                    );
                  
                })
            }
        </tbody>
    </table>
</div> 
  );
};