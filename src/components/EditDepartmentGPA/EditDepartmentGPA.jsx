import "./EditDepartmentGPA.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { Fragment } from "react";
export default function EditDepartmentGPA(){
  const [departments,setDepartments]=useState([]);
  const [departmentsInfo,setDepartmentsInfo]=useState({
    departmentId:"",
    departmentGpa:"",
  });

  async function getAllDepartments(){
      const {data} = await axios("http://localhost:3004/departments");
      setDepartments(data);
      // console.log(data);
  }
useEffect(()=>{
  getAllDepartments();
},[]);


    return(
        <>
            <div className="col-12 editDepartmentGPA">
              <h1>Update Department Gpa</h1>
              {
                departments.map((department)=>{
                  console.log(department.id + department.departmentName);
                  <h1>{department.id + department.departmentName}</h1>
                })
              }
              <form action="" className="col-12">
              <div className="col-12 departmentGPA">
                <label htmlFor="adminUserName">Enter Department Id</label>
                <input type="text" id="departmentGpa" placeholder="Enter department code..."
                onKeyUp={(e)=>{departmentsInfo.departmentId = e.target.value;}}
                />
                </div>
                <div className="col-12 departmentGPA">
                <label htmlFor="departmentGpa">Enter Department Gpa</label>
                <input type="number" id="departmentGpa" placeholder="Enter department gpa..."
                onKeyUp={(e)=>{departmentsInfo.departmentGpa = e.target.value;}}
                />
                <button type="submit" onClick={(e)=>{
                  e.preventDefault();
                  console.log(departmentsInfo);
                }}> Update Department Gpa</button>
                </div>
              </form>
            </div> 
        </>
    );
}