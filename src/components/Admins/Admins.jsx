import React from 'react';
import "./Admins.scss";
import axios from 'axios';
import { useState ,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMinus } from '@fortawesome/free-solid-svg-icons';
import SuperAdmins from '../SystemOwners/SystemOwners';
import Swal from 'sweetalert2';
import TopBar from '../TopBar/TopBar';
import SideBar from '../SideBar/SideBar';

export default function Admins() {
    const [admins,setAdmins]=useState([]);
    const [isLoading,setIsLoading]=useState(false);

    async function getAllAdmins(){
        const {data} = await axios("http://localhost:3004/users?role=Admin");
        setAdmins(data);
        console.log(data);
    }
    async function deleteAdmin(id){
        setIsLoading(true);
        const res= await axios.delete(`http://localhost:3004/users/${id}`);
        setIsLoading(false);
    }

useEffect(()=>{
    getAllAdmins();
},[isLoading]);

  return (
    <div className='adminsTable col-12'>
        <h1>System Owner</h1>
        <SuperAdmins/>
        <hr className='col-12'/>
        <h1>Admins</h1>
        <table>
            <thead>
                <tr>
                <th>Number</th>
                <th>Id</th>
                <th>Name</th>
                <th>Username</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {isLoading ?"Loading Data":
                
                    admins.map((admin , index) =>{
                        return(
                        <tr>
                            <td>{index+1}</td>
                            <td>{admin.id}</td>
                            <td>{admin.name}</td>
                            <td>{admin.username}</td>
                            <td className='tdAcion'>
                              <FontAwesomeIcon className='deleteIcon' icon={faUserMinus}
                              onClick={() => 
                                // deleteAdmin(admin.id)
                                // getAllAdmins()
                                Swal.fire({
                                    title: "Are you sure?",
                                    text: "You won't be able to revert this!",
                                    icon: "warning",
                                    showCancelButton: true,
                                    confirmButtonColor: "#3085d6",
                                    cancelButtonColor: "#d33",
                                    confirmButtonText: "Yes, delete it!"
                                  }).then((result) => {
                                    if (result.isConfirmed) {
                                        deleteAdmin(admin.id)
                                      Swal.fire({
                                        title: "Deleted!",
                                        text: "Your file has been deleted.",
                                        icon: "success"
                                      });
                                    }
                                  })
                              }
                               />
                            </td>
                        </tr>
                        );
                      
                    })
                    }
                
                {/* <tr>
                    <td>1</td>
                    <td>ُEslam Eid</td>
                    <td>eslameid</td>
                </tr> */}
            </tbody>
        </table>
    </div>
  )
}
