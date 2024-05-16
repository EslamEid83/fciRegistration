import React from 'react';
import "./DepartmentsGPA.scss";
import axios from 'axios';
import { useState ,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useRecoilState } from 'recoil';
import { $TabNo } from '../../store';

export default function DepartmentsGPA() {
    const[tabNo , setTabNo] = useRecoilState($TabNo);
    // const [departments,setDepartments]=useState([]);
    const [departmentsData,setDepartmentsData]=useState([]);
    const [isLoading,setIsLoading]=useState(false);
    const [editingIndex, setEditingIndex] = useState(null);
  const [editedGpa, setEditedGpa] = useState("");

    async function fetchDepartments() {
        try {
          const { data } = await axios.get("http://localhost:3004/departments");
          setDepartmentsData(data);
        } catch (error) {
          console.error("Error fetching departments:", error);
        }
      }
      async function updateDepartmentGpa(id, gpa) {
        const updatedData = departmentsData.map((depart, index) => {
          if (index === editingIndex) {
            return { ...depart, departmentGpa: gpa };
          }
          return depart;
        });
        setDepartmentsData(updatedData);

        try {
            await axios.patch(`http://localhost:3004/departments/${id}`, {
                departmentGpa: gpa,
            });
          } catch (error) {
            console.error("Error updating department gpa:", error);
          }
        }


useEffect(()=>{
    fetchDepartments();
},[isLoading]);

  return (
    <div className='departmentsTable col-12'>
        <h1>Departments</h1>
        <table>
            <thead>
                <th>Id</th>
                <th>Departments Name</th>
                <th>Departments Code</th>
                <th>Departments GPA</th>
                <th>Update Departments GPA</th>
            </thead>
            <tbody>
                {isLoading ?"Loading Data":
                
                departmentsData.map((department , index) =>{
                        return(
                        <tr key={index}>
                            <td>{department.id}</td>
                            <td>{department.departmentName}</td>
                            <td>{department.departmentCode}</td>
                            {/* <td>{department.departmentGpa}</td> */}
                            <td>
                               {editingIndex === index ? (
                                 <input
                                   type="number"
                                   value={editedGpa}
                                   onChange={(e) => setEditedGpa(e.target.value)}
                                 />
                               ) : (
                                department.departmentGpa
                               )}
                              </td>
                              <td>
                                {editingIndex === index ? (
                                  <button
                                    className="btn"
                                    onClick={() => {
                                        updateDepartmentGpa(department.id, editedGpa);
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
                                      setEditedGpa(department.departmentGpa);
                                    }}
                                  />
                                )}
                              </td>
                            {/* <td className='tdAcion'>
                              <FontAwesomeIcon className='deleteIcon' icon={faPenToSquare}
                              onClick={()=>{
                                setTabNo(4)
                              }}
                               />
                            </td> */}
                        </tr>
                        );
                      
                    })
                    }
            </tbody>
        </table>
    </div>
  )
}
