import "./Add&DeleteAdmin.scss";
import { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
// import { useRecoilState } from "recoil";
import axios from "axios";
import Swal from "sweetalert2";
import addAdminSchma from "../../schemas/addAdminSchema";
import { toast } from "react-toastify";
export default function AddAdmin(){
  // const [users,setUsers] =useState()
  const [adminInfo, setAdminInfo] =useState({
    name :null,
    username :null,
    password :null,
    confirm_password :null,
  })

//   async function getAdminsData(){
//     const {data} = await axios("http://localhost:3004/users");
//     setUsers(data);
//     console.log(data);
// }
// useEffect(()=>{
//   getAdminsData()
// },[])
  function handelAddAdmin(values){
    const newData ={...values};
    delete newData.confirm_password;
      axios.post("http://localhost:3004/users",newData);

      if(newData.role == 'Admin'){
        toast.success(` ${newData.name} is added successfully to Admins`)
      } else if(newData.role == 'Doctor'){
        toast.success(` ${newData.name} is added successfully to Doctors`)
      } else{
        toast.success(` ${newData.name} is added successfully to System Owners`)
      }
  }
    return(
        <>
        <div className="addAndDeleteAdmin col-12">
              <h1>Add New User</h1>
              <Formik
                initialValues={{
                  name : "",
                  username : "",
                  password : "",
                  confirm_password : "",
                  role : ""
                }}
                validationSchema={addAdminSchma}
                onSubmit={handelAddAdmin}
              > 
              {()=>{
                // console.log(errors);
                  return(
                    <Form action="" className="col-12 addAdminform">
                      <div className="col-12 addNewAdminDiv">
                      <label htmlFor="adminName">Enter admin's name</label>
                      <Field type="text" id="adminName" name="name" placeholder="Enter admin's name..."/>

                      <label htmlFor="adminUserName">Enter admin's username</label>
                      <Field type="text" id="adminUserName" name="username" placeholder="Enter admin's username..."/>

                      <label htmlFor="adminPassword">Enter admin's password</label>
                      <Field type="password" id="adminPassword" name="password" placeholder="Enter admin's password..."/>

                      <label htmlFor="confirm_password">Confirm Password</label>
                      <Field type="password" id="confirm_password" name="confirm_password" placeholder="Confirm Password..."/>

                      <div className=" users">
                        <div className="usersRole">
                           <Field type="radio" className="userRole" id="System Owner" name="role" value="System Owner" />
                            <label for="System Owner" className="lableRole">System Owner</label>
                        </div>
                        <div className="usersRole">
                           <Field type="radio" className="userRole" id="Admin" name="role" value="Admin" />
                            <label for="Admin" className="lableRole">Admin</label>
                        </div>
                        <div className="usersRole">
                           <Field type="radio" className="userRole" id="Doctor" name="role" value="Doctor" />
                            <label for="Doctor" className="lableRole">Doctor</label>
                        </div>
                      </div>
                      <button type="submit"
                      >Add New Admin</button>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div> 
        </>
    );
}
