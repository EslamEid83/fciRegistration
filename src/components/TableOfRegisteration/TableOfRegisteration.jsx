import "./TableOfRegisteration.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { $authAtom } from "../../store";
export default function TableOfRegisteration(){
    // const [changIcon,setChangeIcon]=useState()
    const [courses,setCourses]=useState([]);
    const [ authData , setAuthData,userData ] = useRecoilState($authAtom);
    // async function getListOfRegCourses() {
    //     try {
    //         const response = await axios.get(`http://localhost:3004/users`);
    //         // console.log(response.data);
    //         setCourses(response.data[authData.user.id].listOfRegCourses) ;
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //         return null;
    //     }
    // }
    // getListOfRegCourses();

    // getListOfRegCourses()
    // .then(coursesList => {
    //     if (coursesList) {
    //         console.log("List of Registered Courses:");
    //         coursesList.forEach(course => {
    //             console.log(course.name);
    //         });
    //     } else {
    //         console.log("No data returned.");
    //     }
    // })
    // .catch(error => console.error("An error occurred:", error));

    useEffect(() => {
        fetch(`http://localhost:3004/coursesTest`)
          .then(response => response.json())
          .then(data => setCourses(data))
          .catch(error => console.error('http://localhost:3004/Courses', error));
      }, []);
    return(
        <>
        <div className="col-12 yourRegisterationTable">
            <h1>Your Registeration</h1>
        <table className="tableOfCourses">
                    <thead>
                        {
                            <tr>
                            <th colSpan={3} className="level"><h3>Active Courses For Level </h3></th>
                        </tr>
                        }
                        <tr>
                            <th className="courseNumber">Id</th>
                            <th>Course Name</th>
                            <th className="courseNumber">Hours</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            courses.map((course,i) =>{
                                // console.log(course);
                                return(
                                    <tr key={i}>
                                    <td className="courseNumber">{course.id}</td>
                                    <td className="courseNumber">{course.courseName}</td>
                                    <td className="courseNumber">{course.courseHours}</td>
                                </tr>
                                );
                              
                            })
                        }
                    </tbody>
                </table>
                {/* <div className="saveBtn col-12">
                  <button>Save Registeration</button>
                </div> */}
        </div> 
        </>
    );
}