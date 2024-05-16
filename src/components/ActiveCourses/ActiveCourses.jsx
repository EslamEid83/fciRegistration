import "./ActiveCourses.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useEffect, useState } from "react";
export default function ActiveCourses(){
    const [response , setResponse] = useState([{}]);
    const [response2 , setResponse2] = useState([{}]);
    useEffect(() => {
        axios.get('http://localhost:3004/Courses?status=Active')
          .then((response) => {
            setResponse(response.data);
            console.log(response.data);
          })
          .catch((error) => {
            if (error.response && error.response.status === 404) {
              setResponse2("The requested resource was not found.");
              console.log("The requested resource was not found.");
            } else {
              setResponse2("An error occurred. Please try again later.");
              console.error("An error occurred:", error);
            }
          });
      }, []);
      

    return(
        <div className="col-12 activeCourses">
             <h1>Active Courses</h1>
        <table className="tableOfCourses">
                    <thead>
                        <tr>
                            <th className="courseNumber">Course ID</th>
                            <th className="courseNumber">Course name</th>
                            <th>Course Hours</th>
                            <th>Course Department</th>
                            <th className="courseNumber">Course code</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            response.map((course ,index) =>{
                                // console.log(course);
                                return(
                                    <tr key={index}>
                                    <td className="courseNumber">{course.id}</td>
                                    <td className="courseNumber">{course.courseName}</td>
                                    <td>{course.courseHours}</td>
                                    <td>{course.courseDepartment}</td>
                                    <td>{course.courseCode}</td>
                                   
                                    
                                </tr>
                                );
                              
                            })
                        }
                    </tbody>
                </table>
        </div>
    );
}