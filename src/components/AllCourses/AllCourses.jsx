import "./AllCourses.scss";
import { useRecoilState } from "recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import {  useEffect, useState } from "react";
import axios from "axios";
export default function AllCourses(){
    const [coursesData, setCoursesData] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editeActive, setEditeActive] = useState("");
  
    async function fetchCourses() {
      try {
        const { data } = await axios.get("http://localhost:3004/Courses?_sort=courseLevel");
        setCoursesData(data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    }
  
    async function updateCourseActive(id, state) {
      const updatedData = coursesData.map((course, index) => {
        if (index === editingIndex) {
          return { ...course, status: state };
        }
        return course;
      });
      setCoursesData(updatedData);
  
      try {
        await axios.patch(`http://localhost:3004/Courses/${id}`, {
          status: state,
        });
      } catch (error) {
        console.error("Error updating course Status:", error);
      }
    }
  
    useEffect(() => {
      fetchCourses();
    }, []);
   
   return (
    <div className="AllCoursesPage col-12">
      <h1>All Courses</h1>
      <table className="tableOfCourses col-6">
        <thead>
          <tr>
            {/* <th className="courseNumber">#</th> */}
            <th className="courseNumber">Id</th>
            <th>Course Name</th>
            <th>Course Level</th>
            <th className="courseNumber">Course State</th>
            <th className="courseNumber">Update Course State</th>
          </tr>
        </thead>
        <tbody>
          {coursesData.map((course, index) => (
            <tr key={index}>
              {/* <td className="courseNumber">{index + 1}</td> */}
              <td>{course.id}</td>
              <td className="courseNumber">{course.courseName}</td>
              <td className="courseNumber">{course.courseLevel}</td>
              <td className="courseActive">
                {editingIndex === index ? (
                  <div className="selectState">
                    <div className="activestate">
                    <input type="radio" id="Active" value="Active" onChange={(e) => setEditeActive(e.target.value)}/>
                    <label htmlFor="Active">Active</label>
                    </div>
                    <div className="notActivestate">
                    <input type="radio" id="Not_Active" value="Not Active" onChange={(e) => setEditeActive(e.target.value)}/>
                    <label htmlFor="Not_Active">Not Active</label>
                    </div>
                  </div>
                ) : (
                  course.status
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <button
                    className="btn"
                    onClick={() => {
                      updateCourseActive(course.id, editeActive);
                      setEditingIndex(null);
                    }}
                  >
                    Save
                  </button>
                ) : (
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="icon"
                    onClick={() => {
                      setEditingIndex(index);
                      setEditeActive(course.state);
                    }}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
                    }